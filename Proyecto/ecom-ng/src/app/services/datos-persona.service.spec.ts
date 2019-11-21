import { TestBed } from '@angular/core/testing';

import { DatosPersonaService } from './datos-persona.service';

describe('DatosPersonaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosPersonaService = TestBed.get(DatosPersonaService);
    expect(service).toBeTruthy();
  });
});
