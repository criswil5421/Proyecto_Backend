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


    public function show($id)
    {
       
        $rango= Rango::findOrFail($id);
        
        return response()->json($rango);
    }


    public function update(Request $request, $id)
    {
        
            Rango::findOrFail($id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($id)
    {
        Rango::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
