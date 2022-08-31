import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListLancesPageRoutingModule } from './list-lances-routing.module';

import { ListLancesPage } from './list-lances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListLancesPageRoutingModule
  ],
  declarations: [ListLancesPage]
})
export class ListLancesPageModule {}
