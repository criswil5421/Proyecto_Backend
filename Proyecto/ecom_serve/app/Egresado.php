<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Egresado extends Model
{
    //
    public $timestamps = false;
    protected $guarded = ["id"];
    protected $table ='egresado';
}
