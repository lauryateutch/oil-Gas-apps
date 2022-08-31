import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyFuelOutputPageRoutingModule } from './daily-fuel-output-routing.module';

import { DailyFuelOutputPage } from './daily-fuel-output.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyFuelOutputPageRoutingModule
  ],
  declarations: [DailyFuelOutputPage]
})
export class DailyFuelOutputPageModule {}
