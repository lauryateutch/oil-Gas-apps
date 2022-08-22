import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaugeStatusPage } from './gauge-status.page';

const routes: Routes = [
  {
    path: '',
    component: GaugeStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaugeStatusPageRoutingModule {}
