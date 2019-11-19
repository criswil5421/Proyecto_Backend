<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rango extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'rango_id';
    protected $guarded = ["id"];
    protected $table ='rango';
}
