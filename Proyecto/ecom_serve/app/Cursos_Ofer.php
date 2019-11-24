<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cursos_Ofer extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'cursos_of_id';
    protected $guarded = ["id"];
    protected $table ='cursos_ofer';
}
