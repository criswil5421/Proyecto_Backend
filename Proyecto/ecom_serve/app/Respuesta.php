<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Respuesta extends Model
{
    //
    public $timestamps = false;
    protected $guarded = ["id"];
    protected $table ='Respuesta_Com';
}
