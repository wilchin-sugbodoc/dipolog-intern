<?php

namespace App\Models;

use CodeIgniter\Model;

class EmailComposeModel extends Model
{
    protected $table = 'email';
    protected $primaryKey = 'email_id';
    protected $allowedFields = [
        'reference_no', 'sender_id', 'subject', 'body', 'timestamp', 'is_read', 'folder_id'
    ];
    protected $useTimestamps = true;
    protected $createdField = 'timestamp';
    protected $updatedField = 'timestamp';
    protected $returnType = 'array';
}