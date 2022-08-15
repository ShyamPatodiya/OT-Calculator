import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrsCalculatorComponent } from './hrs-calculator.component';

const routes: Routes = [{ path: '', component: HrsCalculatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrsCalculatorRoutingModule { }
