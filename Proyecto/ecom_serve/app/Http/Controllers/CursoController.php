<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Curso;

class CursoController extends Controller
{
    //
    public function index()
    {

        $curso = Curso::all(); 
        return response()->json($curso);
    }

    
    public function create(Request $request)
    {
        
        Curso::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($id)
    {
       
        $curso= Curso::findOrFail($id);
        
        return response()->json($curso);
    }


    public function update(Request $request, $id)
    {
        
            Curso::findOrFail($id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($id)
    {
        Curso::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
