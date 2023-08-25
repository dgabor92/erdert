<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Szemelygepkocsi extends Model
{
    use HasFactory;
    protected $table = "szemelygepkocsis";
    protected $guarded = [];
    protected $hidden = [];
}
