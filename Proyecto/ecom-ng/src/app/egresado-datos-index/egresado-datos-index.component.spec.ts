import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresadoDatosIndexComponent } from './egresado-datos-index.component';

describe('EgresadoDatosIndexComponent', () => {
  let component: EgresadoDatosIndexComponent;
  let fixture: ComponentFixture<EgresadoDatosIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresadoDatosIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresadoDatosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
