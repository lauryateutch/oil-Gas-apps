import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildTeamPage } from './build-team.page';

const routes: Routes = [
  {
    path: '',
    component: BuildTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildTeamPageRoutingModule {}
