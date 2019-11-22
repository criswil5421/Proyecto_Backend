import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from '../services/comentario.service';

@Component({
  selector: 'app-comentario-index',
  templateUrl: './comentario-index.component.html',
  styleUrls: ['./comentario-index.component.css']
})
export class ComentarioIndexComponent implements OnInit {

  list;
  constructor(
    private route: ActivatedRoute,
    private comentariosService: ComentarioService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.comentariosService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(comentarios_id) {
    console.log("delete:"+comentarios_id);
    this.comentariosService.delete(comentarios_id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}
