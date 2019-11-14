import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionFormComponent } from './capacitacion-form.component';

describe('CapacitacionFormComponent', () => {
  let component: CapacitacionFormComponent;
  let fixture: ComponentFixture<CapacitacionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitacionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
