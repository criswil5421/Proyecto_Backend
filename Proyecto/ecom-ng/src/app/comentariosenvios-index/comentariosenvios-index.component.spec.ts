import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosenviosIndexComponent } from './comentariosenvios-index.component';

describe('ComentariosenviosIndexComponent', () => {
  let component: ComentariosenviosIndexComponent;
  let fixture: ComponentFixture<ComentariosenviosIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariosenviosIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosenviosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
