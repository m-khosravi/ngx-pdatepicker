import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPdatepickerComponent } from './ngx-pdatepicker.component';

describe('NgxPdatepickerComponent', () => {
  let component: NgxPdatepickerComponent;
  let fixture: ComponentFixture<NgxPdatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPdatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxPdatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
