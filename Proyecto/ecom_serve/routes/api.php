<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Authorization,Origin, Content-Type, X-Auth-Token, X-XSRF-TOKEN');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('cliente', 'ClienteController@index');
Route::get('cliente/{id}', 'ClienteController@show');
Route::post('cliente', 'ClienteController@create');
Route::put('cliente/{id}', 'ClienteController@update');
Route::delete('cliente/{id}', 'ClienteController@destroy');

Route::get('persona', 'PersonaController@index');
Route::get('persona/{id}', 'PersonaController@show');
Route::post('persona', 'PersonaController@create');
Route::put('persona/{id}', 'PersonaController@update');
Route::delete('persona/{id}', 'PersonaController@destroy');


Route::get('rango', 'RangoController@index');
Route::get('rango/{id}', 'RangoController@show');
Route::post('rango', 'RangoController@create');
Route::put('rango/{id}', 'RangoController@update');
Route::delete('rango/{id}', 'RangoController@destroy');


Route::get('egresado', 'EgresadoController@index');
Route::get('egresado/{id}', 'EgresadoController@show');
Route::post('egresado', 'EgresadoController@create');
Route::put('egresado/{id}', 'EgresadoController@update');
Route::delete('egresado/{id}', 'EgresadoController@destroy');

Route::get('capacitacion', 'CapacitacionController@index');
Route::get('capacitacion/{id}', 'CapacitacionController@show');
Route::post('capacitacion', 'CapacitacionController@create');
Route::put('capacitacion/{id}', 'CapacitacionController@update');
Route::delete('capacitacion/{id}', 'CapacitacionController@destroy');
