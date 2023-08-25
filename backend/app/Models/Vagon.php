<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vagon extends Model
{
    use HasFactory;
    protected $table = "vagons";
    protected $guarded = [];
    protected $hidden = [];
}
