import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrsCalculatorRoutingModule } from './hrs-calculator-routing.module';
import { HrsCalculatorComponent } from './hrs-calculator.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HrsCalculatorComponent],
  imports: [CommonModule, ReactiveFormsModule, HrsCalculatorRoutingModule],
})
export class HrsCalculatorModule {}
