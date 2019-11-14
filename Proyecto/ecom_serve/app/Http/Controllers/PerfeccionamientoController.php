<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Perfeccionamiento_Profesional;

class PerfeccionamientoController extends Controller
{
    //
    public function index()
    {

        $clientes = Perfeccionamiento_Profesional::all(); 
        return response()->json($clientes);
    }

    
    public function create(Request $request)
    {
        
        Perfeccionamiento_Profesional::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($id)
    {
       
        $cliente= Perfeccionamiento_Profesional::findOrFail($id);
        
        return response()->json($cliente);
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
