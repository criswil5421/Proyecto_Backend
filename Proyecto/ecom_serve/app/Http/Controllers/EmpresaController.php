<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Empresa;

class EmpresaController extends Controller
{
    //
    public function index()
    {

        $empresa = Empresa::all(); 
        return response()->json($empresa);
    }

    
    public function create(Request $request)
    {
        
        Empresa::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($empresa_id)
    {
       
        $empresa= Empresa::findOrFail($empresa_id);
        
        return response()->json($empresa);
    }


    public function update(Request $request, $empresa_id)
    {
        
            Empresa::findOrFail($empresa_id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($empresa_id)
    {
        Empresa::findOrFail($empresa_id)->delete();
        return response()->json(['success' => true]);
    }
}
