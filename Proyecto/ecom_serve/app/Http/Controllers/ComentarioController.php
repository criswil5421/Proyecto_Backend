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


    public function show($id)
    {
       
        $comentario= Comentario::findOrFail($id);
        
        return response()->json($comentario);
    }


    public function update(Request $request, $id)
    {
        
            Comentario::findOrFail($id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($id)
    {
        Comentario::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
