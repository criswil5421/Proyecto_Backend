<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Rango;

class RangoController extends Controller
{
    //
    public function index()
    {

        $rango = Rango::all(); 
        return response()->json($rango);
    }

    public function create(Request $request)
    {
        
        Persona::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($id)
    {
       
        $cliente= Persona::findOrFail($id);
        
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
