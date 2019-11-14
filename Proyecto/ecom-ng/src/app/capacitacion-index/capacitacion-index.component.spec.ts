import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionIndexComponent } from './capacitacion-index.component';

describe('CapacitacionIndexComponent', () => {
  let component: CapacitacionIndexComponent;
  let fixture: ComponentFixture<CapacitacionIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitacionIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitacionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
