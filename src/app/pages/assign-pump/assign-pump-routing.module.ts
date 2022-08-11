import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignPumpPage } from './assign-pump.page';

const routes: Routes = [
  {
    path: '',
    component: AssignPumpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignPumpPageRoutingModule {}
