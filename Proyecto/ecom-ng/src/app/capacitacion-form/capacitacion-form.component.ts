import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CapacitacionService } from '../services/capacitacion.service';

@Component({
  selector: 'app-capacitacion-form',
  templateUrl: './capacitacion-form.component.html',
  styleUrls: ['./capacitacion-form.component.css']
})
export class CapacitacionFormComponent implements OnInit {

  capacitacionForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private capacitacionService: CapacitacionService,
  ) {
  }
  ngOnInit() {
    this.capacitacionForm = this.formBuild.group({
      
      costo: ['', [Validators.required]],
      entidad: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      horas_y_credito: ['', [Validators.required]],
      lugar: ['', [Validators.required]],
      tipo_de_evento: ['', [Validators.required]],
      id: ['', [Validators.required]],
      egresadoID: ['', [Validators.required]],
      PK_Egresado: ['', [Validators.required]],
    });
    //get data
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.capacitacionService.getById(id).subscribe(response => {
        this.capacitacionForm.setValue(response);
        console.log(response);
      });
    }

  }
  save() {
    console.log(this.capacitacionForm.value);
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.capacitacionService.update(id, this.capacitacionForm.value).subscribe(response => {
        console.log("UPDATE ",response);
      });
    }else{
      this.capacitacionService.add(this.capacitacionForm.value).subscribe(response => {
        console.log("ADD ",response);
      });
    }
    this.router.navigate(['/capacitacionindex']);
  }

}
