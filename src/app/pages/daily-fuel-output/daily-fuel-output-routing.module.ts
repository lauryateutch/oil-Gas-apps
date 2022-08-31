import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyFuelOutputPage } from './daily-fuel-output.page';

const routes: Routes = [
  {
    path: '',
    component: DailyFuelOutputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyFuelOutputPageRoutingModule {}
