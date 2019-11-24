<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cursos_Ofer;

class Cursos_OferController extends Controller
{
    //
    public function index()
    {

        $cursos_ofer = Cursos_Ofer::all(); 
        return response()->json($cursos_ofer);
    }

    
    public function create(Request $request)
    {
        
        Cursos_Ofer::create($request->all());
        return response()->json(['success' => true]);
    }


    public function show($curso_ofer_id)
    {
       
        $cursos_ofer= Cursos_Ofer::findOrFail($curso_ofer_id);
        
        return response()->json($cursos_ofer);
    }


    public function update(Request $request, $curso_ofer_id)
    {
        
            Cursos_Ofer::findOrFail($curso_ofer_id)->update($request->all());
            return response()->json(['success' => true]);
         
    }

    
    public function destroy($curso_ofer_id)
    {
        Cursos_Ofer::findOrFail($curso_ofer_id)->delete();
        return response()->json(['success' => true]);
    }
}
