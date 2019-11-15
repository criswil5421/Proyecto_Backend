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


    public function show($id)
    {
       
        $facultad= Facultad::findOrFail($id);
        
        return response()->json($facultad);
    }


    public function update(Request $request, $id)
    {
        
            Facultad::findOrFail($id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($id)
    {
        Facultad::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
