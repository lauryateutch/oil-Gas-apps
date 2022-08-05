import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectionWarehousePage } from './selection-warehouse.page';

const routes: Routes = [
  {
    path: '',
    component: SelectionWarehousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectionWarehousePageRoutingModule {}
