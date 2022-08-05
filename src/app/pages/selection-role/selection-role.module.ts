import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectionRolePageRoutingModule } from './selection-role-routing.module';

import { SelectionRolePage } from './selection-role.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectionRolePageRoutingModule
  ],
  declarations: [SelectionRolePage]
})
export class SelectionRolePageModule {}
