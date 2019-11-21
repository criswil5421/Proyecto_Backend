import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGeneralesIndexComponent } from './datos-generales-index.component';

describe('DatosGeneralesIndexComponent', () => {
  let component: DatosGeneralesIndexComponent;
  let fixture: ComponentFixture<DatosGeneralesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosGeneralesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosGeneralesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
