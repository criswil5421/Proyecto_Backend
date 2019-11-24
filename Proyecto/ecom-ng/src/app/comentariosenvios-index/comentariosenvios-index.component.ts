import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../services/comentario.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comentariosenvios-index',
  templateUrl: './comentariosenvios-index.component.html',
  styleUrls: ['./comentariosenvios-index.component.css']
})
export class ComentariosenviosIndexComponent implements OnInit {

  comentarioenviForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private comentarioenviService: ComentarioService,
  ) {
  }
  ngOnInit() {
    this.comentarioenviForm = this.formBuild.group({
      comentarios_id: ['', [Validators.required]],
      comentario_fecha: ['', [Validators.required]],
      comentario_estado: ['', [Validators.required]],
      comentario_tipo: ['', [Validators.required]],
      comentario_descripcion: ['', [Validators.required]],
      persona_id: ['', [Validators.required]]
    });
    //get data
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.comentarioenviService.getById(id).subscribe(response => {
        this.comentarioenviForm.setValue(response);
        console.log(response);
      });
    }

  }
  save() {
    console.log(this.comentarioenviForm.value);
    let id = this.route.snapshot.paramMap.get('comentarios_id');
    if (id != null) {
      this.comentarioenviService.update(id, this.comentarioenviForm.value).subscribe(response => {
        console.log("UPDATE ",response);
      });
    }else{
      this.comentarioenviService.add(this.comentarioenviForm.value).subscribe(response => {
        console.log("ADD ",response);
      });
    }
    this.router.navigate(['/comentarioenvio']);
  }

}
