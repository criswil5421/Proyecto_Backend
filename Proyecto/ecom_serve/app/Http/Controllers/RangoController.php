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
        
        Rango::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($rango_id)
    {
       
        $rango= Rango::findOrFail($rango_id);
        
        return response()->json($rango);
    }


    public function update(Request $request, $rango_id)
    {
        
            Rango::findOrFail($rango_id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($rango_id)
    {
        Rango::findOrFail($rango_id)->delete();
        return response()->json(['success' => true]);
    }
}
