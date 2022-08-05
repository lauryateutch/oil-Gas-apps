import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveDailyGaugePage } from './save-daily-gauge.page';

const routes: Routes = [
  {
    path: '',
    component: SaveDailyGaugePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaveDailyGaugePageRoutingModule {}
