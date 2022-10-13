import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrsCalculatorRoutingModule } from './hrs-calculator-routing.module';
import { HrsCalculatorComponent } from './hrs-calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeLogsTableComponent } from './time-logs-table/time-logs-table.component';
import { TimeLogsDetailsService } from '../services/time-logs-details.service';

@NgModule({
  declarations: [HrsCalculatorComponent, TimeLogsTableComponent],
  imports: [CommonModule, ReactiveFormsModule, HrsCalculatorRoutingModule],
  providers: [TimeLogsDetailsService],
})
export class HrsCalculatorModule {}
