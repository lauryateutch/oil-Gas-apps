import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'loader',
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
  },
  {
    path: 'visualise-pump-gas-station-agent',
    loadChildren: () => import('./pages/visualise-pump-gas-station-agent/visualise-pump-gas-station-agent.module').then( m => m.VisualisePumpGasStationAgentPageModule)
  },
  {
    path: 'build-team',
    loadChildren: () => import('./pages/build-team/build-team.module').then( m => m.BuildTeamPageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./pages/team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'visualize-team',
    loadChildren: () => import('./pages/visualize-team/visualize-team.module').then( m => m.VisualizeTeamPageModule)
  },
  {
    path: 'gauge-status',
    loadChildren: () => import('./pages/gauge-status/gauge-status.module').then( m => m.GaugeStatusPageModule)
  },  {
    path: 'daily-fuel-output',
    loadChildren: () => import('./pages/daily-fuel-output/daily-fuel-output.module').then( m => m.DailyFuelOutputPageModule)
  },
  {
    path: 'list-lances',
    loadChildren: () => import('./pages/list-lances/list-lances.module').then( m => m.ListLancesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
