import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosoferService } from '../services/cursosofer.service';

@Component({
  selector: 'app-cursosofer-index',
  templateUrl: './cursosofer-index.component.html',
  styleUrls: ['./cursosofer-index.component.css']
})
export class CursosoferIndexComponent implements OnInit {

  list;
  constructor(
    private route: ActivatedRoute,
    private cursoferService: CursosoferService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.cursoferService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(cursos_of_id) {
    console.log("delete:"+cursos_of_id);
    this.cursoferService.delete(cursos_of_id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}
