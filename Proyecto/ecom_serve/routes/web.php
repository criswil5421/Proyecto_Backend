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

Route::get('comentario/index',"ComentarioController@index");
Route::get('comentario/show/{id}',"ComentarioController@show");

Route::get('curso/index',"CursoController@index");
Route::get('curso/show/{id}',"CursoController@show");

Route::get('empresa/index',"EmpresaController@index");
Route::get('empresa/show/{id}',"EmpresaController@show");

Route::get('escuela/index',"EscuelaController@index");
Route::get('escuela/show/{id}',"EscuelaController@show");

Route::get('experiencia/index',"ExperienciaController@index");
Route::get('experiencia/show/{id}',"ExperienciaController@show");

Route::get('facultad/index',"FacultadController@index");
Route::get('facultad/show/{id}',"FacultadController@show");

Route::get('historial/index',"HistorialController@index");
Route::get('historial/show/{id}',"HistorialController@show");

Route::get('oferta_laboral/index',"OfertaLaboralController@index");
Route::get('oferta_laboral/show/{id}',"OfertaLaboralController@show");

Route::get('perfeccionamiento/index',"PerfeccionamientoController@index");
Route::get('perfeccionamiento/show/{id}',"PerfeccionamientoController@show");

Route::get('persona/index',"PersonaController@index");
Route::get('persona/show/{id}',"PersonaController@show");

Route::get('rango/index',"RangoController@index");
Route::get('rango/show/{id}',"RangoController@show");

Route::get('respuesta/index',"RespuestaController@index");
Route::get('respuesta/show/{id}',"RespuestaController@show");