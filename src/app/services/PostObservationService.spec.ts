import { TestBed } from '@angular/core/testing';

import { PostObservationService } from './PostObservationService';




describe('PostObservationService', () => {
  let service: PostObservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostObservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

