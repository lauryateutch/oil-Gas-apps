import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'connection',
    loadChildren: () => import('./pages/connection/connection.module').then( m => m.ConnectionPageModule)
  },
  {
    path: 'selection-role',
    loadChildren: () => import('./pages/selection-role/selection-role.module').then( m => m.SelectionRolePageModule)
  },
  {
    path: 'selection-warehouse',
    loadChildren: () => import('./pages/selection-warehouse/selection-warehouse.module').then( m => m.SelectionWarehousePageModule)
  },
  {
    path: 'save-daily-gauge',
    loadChildren: () => import('./pages/save-daily-gauge/save-daily-gauge.module').then( m => m.SaveDailyGaugePageModule)
  },
  {
    path: 'assign-pump',
    loadChildren: () => import('./pages/assign-pump/assign-pump.module').then( m => m.AssignPumpPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
