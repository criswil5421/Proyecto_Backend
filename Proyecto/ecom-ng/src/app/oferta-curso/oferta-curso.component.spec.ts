import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaCursoComponent } from './oferta-curso.component';

describe('OfertaCursoComponent', () => {
  let component: OfertaCursoComponent;
  let fixture: ComponentFixture<OfertaCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
