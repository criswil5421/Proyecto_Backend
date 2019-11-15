<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\EgresadoDatos;
class EgresadoDatosController extends Controller
{
    //
    public function index()
    {

        $egresadodatos = EgresadoDatos::all(); 
        return response()->json($egresadodatos);
    }

    
    public function create(Request $request)
    {
        
        EgresadoDatos::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($id)
    {
       
        $egresadodatos= EgresadoDatos::findOrFail($id);
        
        return response()->json($egresadodatos);
    }


    public function update(Request $request, $id)
    {
        
            EgresadoDatos::findOrFail($id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($id)
    {
        EgresadoDatos::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
