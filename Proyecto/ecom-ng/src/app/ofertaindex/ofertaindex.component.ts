import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaLaboralService } from '../services/oferta-laboral.service';

@Component({
  selector: 'app-ofertaindex',
  templateUrl: './ofertaindex.component.html',
  styleUrls: ['./ofertaindex.component.css']
})
export class OfertaindexComponent implements OnInit {
  filterPost='';
  post;
  constructor(
    private route: ActivatedRoute,
    private OfertaLaboralService: OfertaLaboralService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.OfertaLaboralService.getList().subscribe(response => {
      this.post=response;
    });
  }
  delete(id) {
    console.log("delete:"+id);
    this.OfertaLaboralService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }
}
