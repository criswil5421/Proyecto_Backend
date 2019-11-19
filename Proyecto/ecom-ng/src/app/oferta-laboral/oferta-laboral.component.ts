import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { OfertaLaboralService } from '../services/oferta-laboral.service';

@Component({
  selector: 'app-oferta-laboral',
  templateUrl: './oferta-laboral.component.html',
  styleUrls: ['./oferta-laboral.component.css']
})
export class OfertaLaboralComponent implements OnInit {
 oferta_laboralForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private OfertaLaboralService: OfertaLaboralService,
  ) {
  }

  ngOnInit() {
    this.oferta_laboralForm = this.formBuild.group({
      id: [''],
      nombreempresa: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
    });
    //get data
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.OfertaLaboralService.getById(id).subscribe(response => {
        this.oferta_laboralForm.setValue(response);
        console.log(response);
      });
    }
  }
  save() {
    console.log(this.oferta_laboralForm.value);
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.OfertaLaboralService.update(id, this.oferta_laboralForm.value).subscribe(response => {
        console.log("UPDATE ",response);
      });
    }else{
      this.OfertaLaboralService.add(this.oferta_laboralForm.value).subscribe(response => {
        console.log("ADD ",response);
      });
    }
    this.router.navigate(['/oferta_laboral']);
  }

}
