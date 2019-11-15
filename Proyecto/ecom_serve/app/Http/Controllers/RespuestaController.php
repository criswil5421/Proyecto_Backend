<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Respuesta;


class RespuestaController extends Controller
{
    //
    public function index()
    {

        $respuesta_com = Respuesta::all(); 
        return response()->json($respuesta_com);
    }

    
    public function create(Request $request)
    {
        
        Respuesta::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($id)
    {
       
        $respuesta_com= Respuesta::findOrFail($id);
        
        return response()->json($respuesta_com);
    }


    public function update(Request $request, $id)
    {
        
            Respuesta::findOrFail($id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($id)
    {
        Respuesta::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
