<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Respuesta extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'respuesta_id';
    protected $table ='Respuesta_Com';
    protected $guarded = ["id"];
}
