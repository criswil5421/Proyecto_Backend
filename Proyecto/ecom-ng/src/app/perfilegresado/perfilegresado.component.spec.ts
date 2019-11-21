import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilegresadoComponent } from './perfilegresado.component';

describe('PerfilegresadoComponent', () => {
  let component: PerfilegresadoComponent;
  let fixture: ComponentFixture<PerfilegresadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilegresadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilegresadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
