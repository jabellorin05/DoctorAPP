import { TestBed } from '@angular/core/testing';

import { PostPrescriptionService } from './post-prescription.service';

describe('PostPrescriptionService', () => {
  let service: PostPrescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostPrescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
