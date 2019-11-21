import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursoOfertaService } from '../services/curso-oferta.service';

@Component({
  selector: 'app-indexoferta',
  templateUrl: './indexoferta.component.html',
  styleUrls: ['./indexoferta.component.css']
})
export class IndexofertaComponent implements OnInit { 
  OfertaCurso: FormGroup;
  CursoOfertaService: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private OfertaLaboralService: CursoOfertaService,
  )
  {
  }

  ngOnInit() {
    this.OfertaCurso = this.formBuild.group({
      id: [''],
      nombrecurso: ['', [Validators.required]],
      cursotipo: ['', [Validators.required]],
      cursolugar: ['', [Validators.required]],
      cursomodalidad: ['', [Validators.required]],
      cursofecha: ['', [Validators.required]],
    });
    //get data
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.CursoOfertaService.getById(id).subscribe(response => {
        this.OfertaCurso.setValue(response);
        console.log(response);
      });
    }
  }
  save() {
    console.log(this.OfertaCurso.value);
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.CursoOfertaService.update(id, this.OfertaCurso.value).subscribe(response => {
        console.log("UPDATE ",response);
      });
    }else{
      this.CursoOfertaService.add(this.OfertaCurso.value).subscribe(response => {
        console.log("ADD ",response);
      });
    }
    this.router.navigate(['/oferta_laboral']);
  }
}
