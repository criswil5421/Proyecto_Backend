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


    public function show($id)
    {
       
        $empresa= Empresa::findOrFail($id);
        
        return response()->json($empresa);
    }


    public function update(Request $request, $id)
    {
        
            Empresa::findOrFail($id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($id)
    {
        Empresa::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
