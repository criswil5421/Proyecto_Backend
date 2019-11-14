import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresadoFormComponent } from './egresado-form.component';

describe('EgresadoFormComponent', () => {
  let component: EgresadoFormComponent;
  let fixture: ComponentFixture<EgresadoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresadoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
