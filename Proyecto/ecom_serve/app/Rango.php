<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rango extends Model
{
    //
    public $timestamps = false;
    protected $guarded = ["id"];
    protected $table ='rango';
}
