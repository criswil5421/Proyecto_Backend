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
    private ofertacreteService: OfertaLaboralService,
  ) {
  }

  ngOnInit() {
    this.oferta_laboralForm = this.formBuild.group({
      oferta_id: [''],
      oferta_tipo: ['', [Validators.required]],
      oferta_descripcion_re: ['', [Validators.required]],
      oferta_descripcion: ['', [Validators.required]],
      persona_id: ['', [Validators.required]],
      oferta_nombre_empresa: ['', [Validators.required]]
    });
    //get data
    let id = this.route.snapshot.paramMap.get('oferta_id');
    if (id != null) {
      this.ofertacreteService.getById(id).subscribe(response => {
        this.oferta_laboralForm.setValue(response);
        console.log(response);
      });
    }
  }
  save() {
    console.log(this.oferta_laboralForm.value);
    let id = this.route.snapshot.paramMap.get('oferta_id');
    if (id != null) {
      this.ofertacreteService.update(id, this.oferta_laboralForm.value).subscribe(response => {
        console.log("UPDATE ",response);
      });
    }else{
      this.ofertacreteService.add(this.oferta_laboralForm.value).subscribe(response => {
        console.log("ADD ",response);
      });
    }
    this.router.navigate(['/ofertaindex']);
  }

}
