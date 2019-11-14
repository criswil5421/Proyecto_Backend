<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Oferta_Laboral extends Model
{
    //
    public $timestamps = false;
    protected $guarded = ["id"];
    protected $table ='oferta_laboral';
}
