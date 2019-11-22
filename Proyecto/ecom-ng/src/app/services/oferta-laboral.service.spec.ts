import { TestBed } from '@angular/core/testing';

import { OfertaLaboralService } from './oferta-laboral.service';

describe('OfertaLaboralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertaLaboralService = TestBed.get(OfertaLaboralService);
    expect(service).toBeTruthy();
  });
});
