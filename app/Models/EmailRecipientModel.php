<?php

namespace App\Models;

use CodeIgniter\Model;

class EmailRecipientModel extends Model
{
    protected $table = 'email_recipients';
    protected $primaryKey = 'recipient_id';
    protected $allowedFields = [
        'email_id', 'receiver_id', 'recipient_type'
    ];
    protected $returnType = 'array';
}