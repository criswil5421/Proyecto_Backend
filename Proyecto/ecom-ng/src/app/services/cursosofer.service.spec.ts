import { TestBed } from '@angular/core/testing';

import { CursosoferService } from './cursosofer.service';

describe('CursosoferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursosoferService = TestBed.get(CursosoferService);
    expect(service).toBeTruthy();
  });
});
