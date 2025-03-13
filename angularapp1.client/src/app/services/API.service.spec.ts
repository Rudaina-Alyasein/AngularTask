import { TestBed } from '@angular/core/testing';

import { APIURLService } from './API.service';

describe('APIURLService', () => {
  let service: APIURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
