import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaegresadoComponent } from './ofertaegresado.component';

describe('OfertaegresadoComponent', () => {
  let component: OfertaegresadoComponent;
  let fixture: ComponentFixture<OfertaegresadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaegresadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaegresadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
