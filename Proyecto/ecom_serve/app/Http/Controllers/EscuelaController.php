<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Escuela_Profesional;

class EscuelaController extends Controller
{
    //
    public function index()
    {

        $clientes = Escuela_Profesional::all(); 
        return response()->json($clientes);
    }

    
    public function create(Request $request)
    {
        
        Escuela_Profesional::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($id)
    {
       
        $cliente= Escuela_Profesional::findOrFail($id);
        
        return response()->json($cliente);
    }


    public function update(Request $request, $id)
    {
        
        Escuela_Profesional::findOrFail($id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($id)
    {
        Escuela_Profesional::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
