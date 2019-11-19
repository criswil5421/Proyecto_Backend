<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Historial extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'historial_id';
    protected $table ='historial';
    protected $guarded = ["id"];
}
