import { TestBed, inject } from '@angular/core/testing';

import { FishryLibService } from './fishry-lib.service';

describe('FishryLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FishryLibService]
    });
  });

  it('should be created', inject([FishryLibService], (service: FishryLibService) => {
    expect(service).toBeTruthy();
  }));
});
