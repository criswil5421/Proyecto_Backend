<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Perfeccionamiento_Profesional;

class PerfeccionamientoController extends Controller
{
    //
    public function index()
    {

        $perfeccionamiento_profesional = Perfeccionamiento_Profesional::all(); 
        return response()->json($perfeccionamiento_profesional);
    }

    
    public function create(Request $request)
    {
        
        Perfeccionamiento_Profesional::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($id)
    {
       
        $perfeccionamiento_profesional= Perfeccionamiento_Profesional::findOrFail($id);
        
        return response()->json($perfeccionamiento_profesional);
    }


    public function update(Request $request, $id)
    {
        
            Perfeccionamiento_Profesional::findOrFail($id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($id)
    {
        Perfeccionamiento_Profesional::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
