<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Escuela_Profesional extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'escuela_profesional_id';
    protected $guarded = ["id"];
    protected $table ='escuela_profesional';
}
