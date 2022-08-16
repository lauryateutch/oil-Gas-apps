import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizeTeamPageRoutingModule } from './visualize-team-routing.module';

import { VisualizeTeamPage } from './visualize-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizeTeamPageRoutingModule
  ],
  declarations: [VisualizeTeamPage]
})
export class VisualizeTeamPageModule {}
