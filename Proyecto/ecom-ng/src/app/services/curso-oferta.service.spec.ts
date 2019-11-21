import { TestBed } from '@angular/core/testing';

import { CursoOfertaService } from './curso-oferta.service';

describe('CursoOfertaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursoOfertaService = TestBed.get(CursoOfertaService);
    expect(service).toBeTruthy();
  });
});
