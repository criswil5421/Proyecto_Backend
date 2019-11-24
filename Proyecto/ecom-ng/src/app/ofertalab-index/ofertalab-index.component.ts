import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaLaboralService } from '../services/oferta-laboral.service';

@Component({
  selector: 'app-ofertalab-index',
  templateUrl: './ofertalab-index.component.html',
  styleUrls: ['./ofertalab-index.component.css']
})
export class OfertalabIndexComponent implements OnInit {

  list;
  constructor(
    private route: ActivatedRoute,
    private ofertalabService: OfertaLaboralService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.ofertalabService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(oferta_id) {
    console.log("delete:"+oferta_id);
    this.ofertalabService.delete(oferta_id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}
