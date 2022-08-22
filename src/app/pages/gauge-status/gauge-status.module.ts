import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaugeStatusPageRoutingModule } from './gauge-status-routing.module';

import { GaugeStatusPage } from './gauge-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaugeStatusPageRoutingModule
  ],
  declarations: [GaugeStatusPage]
})
export class GaugeStatusPageModule {}
