import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosoferIndexComponent } from './cursosofer-index.component';

describe('CursosoferIndexComponent', () => {
  let component: CursosoferIndexComponent;
  let fixture: ComponentFixture<CursosoferIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosoferIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosoferIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
