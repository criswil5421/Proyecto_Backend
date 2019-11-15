<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Experiencia_Laboral;

class ExperienciaController extends Controller
{
    //
    public function index()
    {

        $experiencia_laboral = Experiencia_Laboral::all(); 
        return response()->json($experiencia_laboral);
    }

    
    public function create(Request $request)
    {
        
        Experiencia_Laboral::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($id)
    {
       
        $experiencia_laboral= Experiencia_Laboral::findOrFail($id);
        
        return response()->json($experiencia_laboral);
    }


    public function update(Request $request, $id)
    {
        
            Experiencia_Laboral::findOrFail($id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($id)
    {
        Experiencia_Laboral::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
