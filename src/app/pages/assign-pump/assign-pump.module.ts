import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignPumpPageRoutingModule } from './assign-pump-routing.module';

import { AssignPumpPage } from './assign-pump.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignPumpPageRoutingModule
  ],
  declarations: [AssignPumpPage]
})
export class AssignPumpPageModule {}
