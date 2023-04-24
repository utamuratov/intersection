import { TestBed } from '@angular/core/testing';

import { NgxIntersectionService } from './ngx-intersection.service';

describe('NgxIntersectionService', () => {
  let service: NgxIntersectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIntersectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
