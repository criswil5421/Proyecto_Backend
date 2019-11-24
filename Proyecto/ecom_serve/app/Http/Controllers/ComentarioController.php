<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comentario;

class ComentarioController extends Controller
{
    //
    public function index()
    {

        $comentarios = Comentario::all(); 
        return response()->json($comentarios);
    }

    
    public function create(Request $request)
    {
        
        Comentario::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($comentarios_id)
    {
       
        $comentario= Comentario::findOrFail($comentarios_id);
        
        return response()->json($comentario);
    }


    public function update(Request $request, $comentarios_id)
    {
        
            Comentario::findOrFail($comentarios_id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($comentarios_id)
    {
        Comentario::findOrFail($comentarios_id)->delete();
        return response()->json(['success' => true]);
    }
}
