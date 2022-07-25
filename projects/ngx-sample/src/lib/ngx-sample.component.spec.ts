import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSampleComponent } from './ngx-sample.component';

describe('NgxSampleComponent', () => {
  let component: NgxSampleComponent;
  let fixture: ComponentFixture<NgxSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
