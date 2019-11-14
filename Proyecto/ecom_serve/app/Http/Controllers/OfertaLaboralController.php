<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Oferta_Laboral;

class OfertaLaboralController extends Controller
{
    //
    public function index()
    {

        $clientes = Oferta_Laboral::all(); 
        return response()->json($clientes);
    }

    
    public function create(Request $request)
    {
        
        Oferta_Laboral::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($id)
    {
       
        $cliente= Oferta_Laboral::findOrFail($id);
        
        return response()->json($cliente);
    }


    public function update(Request $request, $id)
    {
        
            Oferta_Laboral::findOrFail($id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($id)
    {
        Oferta_Laboral::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
