import { TestBed } from '@angular/core/testing';

import { EgresadoService } from './egresado.service';

describe('EgresadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EgresadoService = TestBed.get(EgresadoService);
    expect(service).toBeTruthy();
  });
});
