import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectionRolePage } from './selection-role.page';

const routes: Routes = [
  {
    path: '',
    component: SelectionRolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectionRolePageRoutingModule {}
