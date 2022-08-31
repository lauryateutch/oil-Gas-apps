import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListLancesPage } from './list-lances.page';

const routes: Routes = [
  {
    path: '',
    component: ListLancesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListLancesPageRoutingModule {}
