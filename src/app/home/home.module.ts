import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CalHrsFormComponent } from '../cal-hrs-form/cal-hrs-form.component';

@NgModule({
  declarations: [HomeComponent, CalHrsFormComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
