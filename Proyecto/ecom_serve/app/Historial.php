<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Historial extends Model
{
    //
    public $timestamps = false;
    protected $guarded = ["id"];
    protected $table ='historial';
}
