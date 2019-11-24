import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertalabIndexComponent } from './ofertalab-index.component';

describe('OfertalabIndexComponent', () => {
  let component: OfertalabIndexComponent;
  let fixture: ComponentFixture<OfertalabIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertalabIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertalabIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
