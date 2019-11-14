<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Escuela_Profesional extends Model
{
    //
    public $timestamps = false;
    protected $guarded = ["id"];
    protected $table ='escuela_profesional';
}
