<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Experiencia_Laboral extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'exper_id';
    protected $guarded = ["id"];
    protected $table ='experiencia_laboral';
}
