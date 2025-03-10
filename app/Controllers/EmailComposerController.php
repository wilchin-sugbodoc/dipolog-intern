<?php

namespace App\Controllers;

use App\Models\EmailComposeModel;
use App\Models\EmailRecipientModel;
use CodeIgniter\Controller;

class EmailComposerController extends BaseController
{
    public function index()
    {
        return view('pages/email-compose');
    }

    public function inbox()
    {
        $db = \Config\Database::connect();
        $userId = 1; 

        $query = $db->query("
            SELECT DISTINCT e.email_id, e.subject, e.body, e.timestamp, e.is_read, 
               receiver.username AS receiver_name
            FROM email e
            JOIN email_recipients er ON e.email_id = er.email_id
            JOIN users_email receiver ON er.receiver_ID = receiver.user_id
            WHERE e.sender_ID = ?
            ORDER BY e.timestamp DESC
        ", [$userId]);

        $data['emails'] = $query->getResultArray();

        return view('pages/email-inbox', $data);
    }

    public function sendEmail()
    {
        helper(['form', 'url']);

        $emailModel = new EmailComposeModel();
        $recipientModel = new EmailRecipientModel();
        $db = \Config\Database::connect();
        
        $validation = $this->validate([
            'recipient' => 'required|valid_email',
            'subject'   => 'required|min_length[3]|max_length[255]',
            'body'      => 'required',
        ]);

        if (!$validation) {
            return redirect()->back()->withInput()->with('error', $this->validator->listErrors());
        }

        $recipientEmail = $this->request->getPost('recipient');

        $recipientId = $this->getOrCreateUser($recipientEmail);

        $emailData = [
            'reference_no' => uniqid(),
            'sender_id'    => 1, 
            'subject'      => $this->request->getPost('subject'),
            'body'         => $this->request->getPost('body'),
            'is_read'      => 0,
            'folder_id'    => 1, 
        ];

        $emailModel->insert($emailData);
        $emailId = $emailModel->getInsertID();

        $recipientModel->insert([
            'email_id'       => $emailId,
            'receiver_id'    => $recipientId,
            'recipient_type' => 'To',
        ]);

        return redirect()->to('/rygel-dash-theme/pages/email-compose')->with('success', 'Email sent successfully!');
    }

    /**
     * Function to check if user exists or create a new one
     */
    private function getOrCreateUser($email)
    {
        $db = \Config\Database::connect();
        $builder = $db->table('users_email');

        $user = $builder->getWhere(['email' => $email])->getRowArray();
        if ($user) {
            return $user['user_id'];
        }

        $username = explode('@', $email)[0];

        $username = $this->generateUniqueUsername($username);

        $userData = [
            'username'  => $username,
            'email'     => $email,
            'created_at' => date('Y-m-d H:i:s'), 
        ];

        $builder->insert($userData);
        return $db->insertID(); 
    }

    public function readEmail($emailId)
    {
        $db = \Config\Database::connect();
        $query = $db->query("
            SELECT e.email_id, e.subject, e.body, e.timestamp, e.is_read, 
                sender.username AS sender_name, sender.email AS sender_email, 
                receiver.username AS receiver_name, receiver.email AS receiver_email
            FROM email e
            JOIN users_email sender ON e.sender_ID = sender.user_id
            JOIN email_recipients er ON e.email_ID = er.email_ID
            JOIN users_email receiver ON er.receiver_ID = receiver.user_id
            WHERE e.email_id = ?
        ", [$emailId]);

        $email = $query->getRowArray();

        if (!$email) {
            return redirect()->to('/pages/email-inbox')->with('error', 'Email not found.');
        }

        $db->query("UPDATE email SET is_read = 1 WHERE email_id = ?", [$emailId]);

        return view('pages/email-read', ['email' => $email]);
    }


    /**
     * Function to generate a unique username
     */
    private function generateUniqueUsername($email)
    {
        $db = \Config\Database::connect();
        $builder = $db->table('users_email');

        $emailParts = explode('@', $email);
        $nameParts = explode('.', $emailParts[0]); 

        if (count($nameParts) >= 2) {
            $firstName = ucfirst($nameParts[0]); 
            $lastName = ucfirst($nameParts[1]);
            $newUsername = $firstName . ' ' . $lastName; 
        } else {
            $newUsername = 'User';
        }

        $originalUsername = $newUsername;
        $counter = 1;

        while ($builder->where('username', $newUsername)->countAllResults() > 0) {
            $newUsername = $originalUsername . ' ' . $counter;
            $counter++;
        }

        return $newUsername;
    }
}