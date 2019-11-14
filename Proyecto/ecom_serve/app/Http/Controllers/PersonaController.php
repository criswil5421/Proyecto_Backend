<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Persona;

class PersonaController extends Controller
{
    //
    public function index()
    {

        $Persona = Persona::all(); 
        return response()->json($Persona);
    }

    public function create(Request $request)
    {
        
        Persona::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($id)
    {
       
        $Persona= Persona::findOrFail($id);
        
        return response()->json($Persona);
    }


    public function update(Request $request, $id)
    {
        
            Persona::findOrFail($id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($id)
    {
        Persona::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
