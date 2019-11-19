<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Oferta_Laboral extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'oferta_id';
    protected $table ='oferta_laboral';
    protected $guarded = ["id"];
}
