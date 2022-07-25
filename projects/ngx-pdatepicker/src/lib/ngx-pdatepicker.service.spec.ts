import { TestBed } from '@angular/core/testing';

import { NgxPdatepickerService } from './ngx-pdatepicker.service';

describe('NgxPdatepickerService', () => {
  let service: NgxPdatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPdatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
