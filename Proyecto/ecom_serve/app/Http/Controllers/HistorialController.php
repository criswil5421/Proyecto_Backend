<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Historial;

class HistorialController extends Controller
{
    //
    public function index()
    {

        $historial = Historial::all(); 
        return response()->json($historial);
    }

    
    public function create(Request $request)
    {
        
        Historial::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($id)
    {
       
        $historial= Historial::findOrFail($id);
        
        return response()->json($historial);
    }


    public function update(Request $request, $id)
    {
        
            Historial::findOrFail($id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($id)
    {
        Historial::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
