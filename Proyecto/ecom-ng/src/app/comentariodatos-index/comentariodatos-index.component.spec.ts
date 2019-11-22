import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariodatosIndexComponent } from './comentariodatos-index.component';

describe('ComentariodatosIndexComponent', () => {
  let component: ComentariodatosIndexComponent;
  let fixture: ComponentFixture<ComentariodatosIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariodatosIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariodatosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
