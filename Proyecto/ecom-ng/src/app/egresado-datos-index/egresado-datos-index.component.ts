import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EgresadoDatosService } from '../services/egresado-datos.service';

@Component({
  selector: 'app-egresado-datos-index',
  templateUrl: './egresado-datos-index.component.html',
  styleUrls: ['./egresado-datos-index.component.css']
})
export class EgresadoDatosIndexComponent implements OnInit {

  list;
  constructor(
    private route: ActivatedRoute,
    private egresadodatosService: EgresadoDatosService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.egresadodatosService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id) {
    console.log("delete:"+id);
    this.egresadodatosService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }


}
