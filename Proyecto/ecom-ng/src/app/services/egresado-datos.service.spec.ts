import { TestBed } from '@angular/core/testing';

import { EgresadoDatosService } from './egresado-datos.service';

describe('EgresadoDatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EgresadoDatosService = TestBed.get(EgresadoDatosService);
    expect(service).toBeTruthy();
  });
});
