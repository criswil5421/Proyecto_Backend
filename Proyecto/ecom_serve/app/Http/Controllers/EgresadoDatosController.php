<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class EgresadoDatosController extends Controller
{
    //
    public function index()
    {
        $egresa = DB::table('egresado')
        ->join('persona' , 'persona.id' , 'egresado.Persona_Id')
        ->join('escuela_profesional','escuela_profesional.id','egresado.escuela_profesional_Id')
        ->select('egresado.Egresado_Codigo_U' , 'persona.Persona_Ap_Paterno' ,
         'persona.Persona_AP_Materno' , 'persona.Persona_Nombre' , 'persona.Per_Nro_Documento' , 
         'persona.Persona_Celular' , 'egresado.Egre_Fecha_Egreso' , 'escuela_profesional.Escuela_Profesional_Nombre')
        ->get();
        return response()->json($egresa);
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
