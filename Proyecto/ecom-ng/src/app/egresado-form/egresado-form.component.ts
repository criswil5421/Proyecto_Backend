import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { EgresadoService } from '../services/egresado.service';

@Component({
  selector: 'app-egresado-form',
  templateUrl: './egresado-form.component.html',
  styleUrls: ['./egresado-form.component.css']
})
export class EgresadoFormComponent implements OnInit {

  egresadoForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private egresadoService: EgresadoService,
  ) {
  }
  ngOnInit() {
    this.egresadoForm = this.formBuild.group({
      
      fecha_egreso: ['', [Validators.required]],
      fecha_ingreso: ['', [Validators.required]],
      id: ['', [Validators.required]],
    });
    //get data
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.egresadoService.getById(id).subscribe(response => {
        this.egresadoForm.setValue(response);
        console.log(response);
      });
    }

  }
  save() {
    console.log(this.egresadoForm.value);
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.egresadoService.update(id, this.egresadoForm.value).subscribe(response => {
        console.log("UPDATE ",response);
      });
    }else{
      this.egresadoService.add(this.egresadoForm.value).subscribe(response => {
        console.log("ADD ",response);
      });
    }
    this.router.navigate(['/egresadoindex']);
  }

}
