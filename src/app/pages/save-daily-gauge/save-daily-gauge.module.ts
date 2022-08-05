import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaveDailyGaugePageRoutingModule } from './save-daily-gauge-routing.module';

import { SaveDailyGaugePage } from './save-daily-gauge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaveDailyGaugePageRoutingModule
  ],
  declarations: [SaveDailyGaugePage]
})
export class SaveDailyGaugePageModule {}
