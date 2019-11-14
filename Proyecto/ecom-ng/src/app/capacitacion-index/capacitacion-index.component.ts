import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapacitacionService } from '../services/capacitacion.service';


@Component({
  selector: 'app-capacitacion-index',
  templateUrl: './capacitacion-index.component.html',
  styleUrls: ['./capacitacion-index.component.css']
})
export class CapacitacionIndexComponent implements OnInit {

  list;
  constructor(
    private route: ActivatedRoute,
    private capacitacionService: CapacitacionService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.capacitacionService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id) {
    console.log("delete:"+id);
    this.capacitacionService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}
