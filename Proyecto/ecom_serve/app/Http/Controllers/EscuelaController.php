<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Escuela_Profesional;

class EscuelaController extends Controller
{
    //
    public function index()
    {

        $escuela_profesional = Escuela_Profesional::all(); 
        return response()->json($escuela_profesional);
    }

    
    public function create(Request $request)
    {
        
        Escuela_Profesional::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($id)
    {
       
        $escuela_profesional= Escuela_Profesional::findOrFail($id);
        
        return response()->json($escuela_profesional);
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
