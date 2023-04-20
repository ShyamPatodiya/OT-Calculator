import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalHrsFormComponent } from './cal-hrs-form.component';

describe('CalHrsFormComponent', () => {
  let component: CalHrsFormComponent;
  let fixture: ComponentFixture<CalHrsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalHrsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalHrsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
