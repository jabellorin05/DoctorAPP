import { TestBed } from '@angular/core/testing';

import { SubmitDataToTheApiService } from './submit-data-to-the-api.service';

describe('SubmitDataToTheApiService', () => {
  let service: SubmitDataToTheApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitDataToTheApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
