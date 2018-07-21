import { TestBed, inject } from '@angular/core/testing';

import { PupilService } from './pupil.service';

describe('PupilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PupilService]
    });
  });

  it('should be created', inject([PupilService], (service: PupilService) => {
    expect(service).toBeTruthy();
  }));
});
