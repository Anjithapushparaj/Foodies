import { TestBed } from '@angular/core/testing';

import { RestourentsService } from './restourents.service';

describe('RestourentsService', () => {
  let service: RestourentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestourentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
