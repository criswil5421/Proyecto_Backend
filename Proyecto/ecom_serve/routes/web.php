<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('cliente/index',"ClienteController@index");
Route::get('cliente/show/{id}',"ClienteController@show");

Route::get('egresado/index',"EgresadoController@index");
Route::get('egresado/show/{id}',"EgresadoController@show");

Route::get('capacitacion/index',"CapacitacionController@index");
Route::get('capacitacion/show/{id}',"CapacitacionController@show");
