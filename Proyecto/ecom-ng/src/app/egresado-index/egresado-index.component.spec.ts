import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresadoIndexComponent } from './egresado-index.component';

describe('EgresadoIndexComponent', () => {
  let component: EgresadoIndexComponent;
  let fixture: ComponentFixture<EgresadoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresadoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresadoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
