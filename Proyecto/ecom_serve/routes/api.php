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


Route::get('comentario', 'ComentarioController@index');
Route::get('comentario/{id}', 'comentarioController@show');
Route::post('comentario', 'comentarioController@create');
Route::put('comentario/{id}', 'comentarioController@update');
Route::delete('comentario/{id}', 'comentarioController@destroy');

Route::get('escuela', 'EscuelaController@index');
Route::get('escuela/{id}', 'escuelaController@show');
Route::post('escuela', 'escuelaController@create');
Route::put('escuela/{id}', 'escuelaController@update');
Route::delete('escuela/{id}', 'escuelaController@destroy');


Route::get('facultad', '@index');
Route::get('facultad/{id}', 'FacultadController@show');
Route::post('facultad', 'FacultadController@create');
Route::put('facultad/{id}', 'FacultadController@update');
Route::delete('facultad/{id}', 'FacultadController@destroy');


Route::get('experiencia', 'ExperienciaController@index');
Route::get('experiencia/{id}', 'ExperienciaController@show');
Route::post('experiencia', 'ExperienciaController@create');
Route::put('experiencia/{id}', 'ExperienciaController@update');
Route::delete('experiencia/{id}', 'ExperienciaController@destroy');


Route::get('curso', 'CursoController@index');
Route::get('curso/{id}', 'CursoController@show');
Route::post('curso', 'CursoController@create');
Route::put('curso/{id}', 'CursoController@update');
Route::delete('curso/{id}', 'CursoController@destroy');


Route::get('empresa', 'EmpresaController@index');
Route::get('empresa/{id}', 'EmpresaController@show');
Route::post('empresa', 'EmpresaController@create');
Route::put('empresa/{id}', 'EmpresaController@update');
Route::delete('empresa/{id}', 'EmpresaController@destroy');


Route::get('historial', 'HistorialController@index');
Route::get('historial/{id}', 'HistorialController@show');
Route::post('historial', 'HistorialController@create');
Route::put('historial/{id}', 'HistorialController@update');
Route::delete('historial/{id}', 'HistorialController@destroy');


Route::get('egresadodatos', 'EgresaDodatosController@index');
Route::get('egresadodatos/{id}', 'EgresaDodatosController@show');
Route::post('egresadodatos', 'EgresaDodatosController@create');
Route::put('egresadodatos/{id}', 'EgresaDodatosController@update');
Route::delete('egresadodatos/{id}', 'EgresaDodatosController@destroy');


Route::get('respuesta', 'RespuestaController@index');
Route::get('respuesta/{id}', 'RespuestaController@show');
Route::post('respuesta', 'RespuestaController@create');
Route::put('respuesta/{id}', 'RespuestaController@update');
Route::delete('respuesta/{id}', 'RespuestaController@destroy');


Route::get('oferta_laboral', 'OfertaLaboralController@index');
Route::get('oferta_laboral/{id}', 'OfertaLaboralController@show');
Route::post('oferta_laboral', 'OfertaLaboralController@create');
Route::put('oferta_laboral/{id}', 'OfertaLaboralController@update');
Route::delete('oferta_laboral/{id}', 'OfertaLaboralController@destroy');


Route::get('perfeccionamiento', 'PerfeccionamientoController@index');
Route::get('perfeccionamiento/{id}', 'PerfeccionamientoController@show');
Route::post('perfeccionamiento', 'PerfeccionamientoController@create');
Route::put('perfeccionamiento/{id}', 'PerfeccionamientoController@update');
Route::delete('perfeccionamiento/{id}', 'PerfeccionamientoController@destroy');


