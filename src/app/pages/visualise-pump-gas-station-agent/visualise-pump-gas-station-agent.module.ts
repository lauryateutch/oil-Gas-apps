import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualisePumpGasStationAgentPageRoutingModule } from './visualise-pump-gas-station-agent-routing.module';

import { VisualisePumpGasStationAgentPage } from './visualise-pump-gas-station-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualisePumpGasStationAgentPageRoutingModule
  ],
  declarations: [VisualisePumpGasStationAgentPage]
})
export class VisualisePumpGasStationAgentPageModule {}
