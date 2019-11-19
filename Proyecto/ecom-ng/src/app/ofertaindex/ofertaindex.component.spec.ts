import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaindexComponent } from './ofertaindex.component';

describe('OfertaindexComponent', () => {
  let component: OfertaindexComponent;
  let fixture: ComponentFixture<OfertaindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
