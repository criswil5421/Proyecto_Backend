import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexofertaComponent } from './indexoferta.component';

describe('IndexofertaComponent', () => {
  let component: IndexofertaComponent;
  let fixture: ComponentFixture<IndexofertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexofertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
