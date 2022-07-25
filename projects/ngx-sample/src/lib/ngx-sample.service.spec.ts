import { TestBed } from '@angular/core/testing';

import { NgxSampleService } from './ngx-sample.service';

describe('NgxSampleService', () => {
  let service: NgxSampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
