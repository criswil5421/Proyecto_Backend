import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoOfertaService } from '../services/curso-oferta.service';


@Component({
  selector: 'app-oferta-curso',
  templateUrl: './oferta-curso.component.html',
  styleUrls: ['./oferta-curso.component.css']
})
export class OfertaCursoComponent implements OnInit {

  list;
  constructor(
    private route: ActivatedRoute,
    private CursoOfertaService: CursoOfertaService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.CursoOfertaService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id) {
    console.log("delete:"+id);
    this.CursoOfertaService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
}
}