import { TestBed } from '@angular/core/testing';

import { FicheAnimalService } from './fiche-animal.service';

describe('FicheAnimalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FicheAnimalService = TestBed.get(FicheAnimalService);
    expect(service).toBeTruthy();
  });
});
