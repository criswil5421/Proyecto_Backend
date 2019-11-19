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


    public function show($historial_id)
    {
       
        $historial= Historial::findOrFail($historial_id);
        
        return response()->json($historial);
    }


    public function update(Request $request, $historial_id)
    {
        
            Historial::findOrFail($historial_id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($historial_id)
    {
        Historial::findOrFail($historial_id)->delete();
        return response()->json(['success' => true]);
    }
}
