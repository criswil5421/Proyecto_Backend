import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEgresadoComponent } from './panel-egresado.component';

describe('PanelEgresadoComponent', () => {
  let component: PanelEgresadoComponent;
  let fixture: ComponentFixture<PanelEgresadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelEgresadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelEgresadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
