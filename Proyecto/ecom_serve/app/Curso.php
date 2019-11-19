<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'curso_id';
    protected $guarded = ["id"];
    protected $table ='curso';
}
