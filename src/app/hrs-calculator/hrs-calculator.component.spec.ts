import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrsCalculatorComponent } from './hrs-calculator.component';

describe('HrsCalculatorComponent', () => {
  let component: HrsCalculatorComponent;
  let fixture: ComponentFixture<HrsCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrsCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
