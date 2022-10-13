import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLogsTableComponent } from './time-logs-table.component';

describe('TimeLogsTableComponent', () => {
  let component: TimeLogsTableComponent;
  let fixture: ComponentFixture<TimeLogsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLogsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeLogsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
