<?php

namespace App\Controllers;

use App\Models\EmailComposeModel;
use App\Models\EmailRecipientModel;
use CodeIgniter\Controller;

class EmailComposerController extends BaseController
{
    // Display the email compose page
    public function index()
    {
        return view('pages/email-compose');
    }

    public function inbox()
    {
        $db = \Config\Database::connect();
        $userId = 1; // TODO: Replace with logged-in user ID dynamically

        $query = $db->query("
            SELECT DISTINCT e.email_id, e.subject, e.body, e.timestamp, e.is_read, 
               receiver.username AS receiver_name
            FROM email e
            JOIN email_recipients er ON e.email_id = er.email_id
            JOIN users receiver ON er.receiver_ID = receiver.user_id
            WHERE e.sender_ID = ?
            ORDER BY e.timestamp DESC
        ", [$userId]);

        $data['emails'] = $query->getResultArray();

        return view('pages/email-inbox', $data);
    }

    // Handle sending a new email
    public function sendEmail()
    {
        helper(['form', 'url']);

        $emailModel = new EmailComposeModel();
        $recipientModel = new EmailRecipientModel();
        $db = \Config\Database::connect();
        
        // Validate form input
        $validation = $this->validate([
            'recipient' => 'required|valid_email',
            'subject'   => 'required|min_length[3]|max_length[255]',
            'body'      => 'required',
        ]);

        if (!$validation) {
            return redirect()->back()->withInput()->with('error', $this->validator->listErrors());
        }

        $recipientEmail = $this->request->getPost('recipient');

        // Check if recipient exists or create a new one
        $recipientId = $this->getOrCreateUser($recipientEmail);

        // Insert email into the database
        $emailData = [
            'reference_no' => uniqid(),
            'sender_id'    => 1, // Example logged-in user ID
            'subject'      => $this->request->getPost('subject'),
            'body'         => $this->request->getPost('body'),
            'is_read'      => 0,
            'folder_id'    => 1, // Example folder ID (Sent Items)
        ];

        $emailModel->insert($emailData);
        $emailId = $emailModel->getInsertID();

        // Insert recipient into email_recipients
        $recipientModel->insert([
            'email_id'       => $emailId,
            'receiver_id'    => $recipientId,
            'recipient_type' => 'To',
        ]);

        // Redirect back with success message
        return redirect()->to('/rygel-dash-theme/pages/email-compose')->with('success', 'Email sent successfully!');
    }

    /**
     * Function to check if user exists or create a new one
     */
    private function getOrCreateUser($email)
    {
        $db = \Config\Database::connect();
        $builder = $db->table('users');

        // Check if user already exists
        $user = $builder->getWhere(['email' => $email])->getRowArray();
        if ($user) {
            return $user['user_id'];
        }

        // Extract a username from email (before '@')
        $username = explode('@', $email)[0];

        // Ensure username is unique
        $username = $this->generateUniqueUsername($username);

        // Insert new user
        $userData = [
            'username'  => $username,
            'email'     => $email,
            'created_at' => date('Y-m-d H:i:s'), // Current timestamp
        ];

        $builder->insert($userData);
        return $db->insertID(); // Return new user ID
    }

    public function readEmail($emailId)
    {
        $db = \Config\Database::connect();
        $query = $db->query("
            SELECT e.email_id, e.subject, e.body, e.timestamp, e.is_read, 
                sender.username AS sender_name, sender.email AS sender_email, 
                receiver.username AS receiver_name, receiver.email AS receiver_email
            FROM email e
            JOIN users sender ON e.sender_ID = sender.user_id
            JOIN email_recipients er ON e.email_ID = er.email_ID
            JOIN users receiver ON er.receiver_ID = receiver.user_id
            WHERE e.email_id = ?
        ", [$emailId]);

        $email = $query->getRowArray();

        if (!$email) {
            return redirect()->to('/pages/email-inbox')->with('error', 'Email not found.');
        }

        // Mark email as read
        $db->query("UPDATE email SET is_read = 1 WHERE email_id = ?", [$emailId]);

        return view('pages/email-read', ['email' => $email]);
    }


    /**
     * Function to generate a unique username
     */
    private function generateUniqueUsername($email)
    {
        $db = \Config\Database::connect();
        $builder = $db->table('users');

        // Extract first and last name from email
        $emailParts = explode('@', $email);
        $nameParts = explode('.', $emailParts[0]); // e.g., "john.doe" → ["john", "doe"]

        if (count($nameParts) >= 2) {
            $firstName = ucfirst($nameParts[0]); // Capitalize first letter
            $lastName = ucfirst($nameParts[1]);
            $newUsername = $firstName . ' ' . $lastName; // "John Doe"
        } else {
            $newUsername = 'User'; // Fallback if no name found
        }

        // Ensure the username is unique
        $originalUsername = $newUsername;
        $counter = 1;

        while ($builder->where('username', $newUsername)->countAllResults() > 0) {
            $newUsername = $originalUsername . ' ' . $counter;
            $counter++;
        }

        return $newUsername;
    }
}