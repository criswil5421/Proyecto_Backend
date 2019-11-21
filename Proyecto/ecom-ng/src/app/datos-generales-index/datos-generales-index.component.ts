import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosPersonaService } from '../services/datos-persona.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-datos-generales-index',
  templateUrl: './datos-generales-index.component.html',
  styleUrls: ['./datos-generales-index.component.css']
})
export class DatosGeneralesIndexComponent implements OnInit {

  list;
  datosperForm: FormGroup;
  constructor(
    private formBuild: FormBuilder,
    private route: ActivatedRoute,
    private perdatosService: DatosPersonaService,
  ) {
    let persona_id = this.route.snapshot.paramMap.get('persona_id');
    this.getById(persona_id);
    this.getList();
  }
  ngOnInit() {
    this.getList();
    /*
    this.getById(id);
    
    this.datosperForm = this.formBuild.group({
      
      persona_id: [''],
      persona_tipo_doc: [''],
      persona_ap_paterno: [''],
      persona_ap_materno: [''],
      persona_nombre: [''],
      per_nro_documento: [''],
      persona_correo: [''],
      fecha_ingreso: [''],
      id: [''],
      per_fech_nac: [''],
      persona_edad: [''],
      persona_sexo: [''],
      persona_pais: [''],
      persona_provincia: [''],
      persona_departamento: [''],
      persona_distrito: [''],
      persona_telefono: [''],
      persona_domicilio_actual: [''],
      persona_celular: [''],
    });
    //this.getList();
    let persona_id = this.route.snapshot.paramMap.get('persona_id');
    if (persona_id != null) {
      this.perdatosService.getById(persona_id).subscribe(response => {
        this.datosperForm.setValue(response);
        console.log(response);
      });
    }*/
  }
  private getList() {
    this.perdatosService.getList().subscribe(response => {
      this.list=response;
    });
  }
  private getById(persona_id) {
    this.perdatosService.getById(persona_id).subscribe(response => {
      this.list=response;
    });
  }
  /*
  delete(id) {
    console.log("delete:"+id);
    this.perdatosService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }*/

}
