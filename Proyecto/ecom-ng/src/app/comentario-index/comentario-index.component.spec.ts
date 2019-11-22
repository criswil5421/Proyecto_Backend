import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioIndexComponent } from './comentario-index.component';

describe('ComentarioIndexComponent', () => {
  let component: ComentarioIndexComponent;
  let fixture: ComponentFixture<ComentarioIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
