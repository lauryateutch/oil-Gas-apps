import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuildTeamPageRoutingModule } from './build-team-routing.module';

import { BuildTeamPage } from './build-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuildTeamPageRoutingModule
  ],
  declarations: [BuildTeamPage]
})
export class BuildTeamPageModule {}
