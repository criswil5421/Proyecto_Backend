<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Facultad;

class FacultadController extends Controller
{
    //
    public function index()
    {

        $facultad = Facultad::all(); 
        return response()->json($facultad);
    }

    
    public function create(Request $request)
    {
        
        Facultad::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($facultad_id)
    {
       
        $facultad= Facultad::findOrFail($facultad_id);
        
        return response()->json($facultad);
    }


    public function update(Request $request, $facultad_id)
    {
        
            Facultad::findOrFail($facultad_id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($facultad_id)
    {
        Facultad::findOrFail($facultad_id)->delete();
        return response()->json(['success' => true]);
    }
}
