import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaLaboralService } from '../services/oferta-laboral.service';

@Component({
  selector: 'app-ofertaegresado',
  templateUrl: './ofertaegresado.component.html',
  styleUrls: ['./ofertaegresado.component.css']
})
export class OfertaegresadoComponent implements OnInit {
  list;
  constructor(
    private route: ActivatedRoute,
    private ofertalaboraService: OfertaLaboralService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.ofertalaboraService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id) {
    console.log("delete:"+id);
    this.ofertalaboraService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }
}
