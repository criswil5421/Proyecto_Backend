<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Respuesta;


class RespuestaController extends Controller
{
    //
    public function index()
    {

        $clientes = Respuesta::all(); 
        return response()->json($clientes);
    }

    
    public function create(Request $request)
    {
        
        Respuesta::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($id)
    {
       
        $cliente= Respuesta::findOrFail($id);
        
        return response()->json($cliente);
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
