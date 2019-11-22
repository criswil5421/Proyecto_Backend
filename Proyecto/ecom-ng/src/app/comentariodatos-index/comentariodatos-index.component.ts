import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from '../services/comentario.service';

@Component({
  selector: 'app-comentariodatos-index',
  templateUrl: './comentariodatos-index.component.html',
  styleUrls: ['./comentariodatos-index.component.css']
})
export class ComentariodatosIndexComponent implements OnInit {

  list;
  constructor(
    private route: ActivatedRoute,
    private comentariodatosService: ComentarioService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.comentariodatosService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id) {
    console.log("delete:"+id);
    this.comentariodatosService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}
