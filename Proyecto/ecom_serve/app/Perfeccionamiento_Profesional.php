<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Perfeccionamiento_Profesional extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'perfeccion_id';
    protected $guarded = ["id"];
    protected $table ='perfeccionamiento_profesional';
}
