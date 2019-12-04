import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'work-area',
    loadChildren: () => import('./pages/work-area/work-area.module').then( m => m.WorkAreaPageModule)
  },
  {
    path: 'add-documents',
    loadChildren: () => import('./modals/add-documents/add-documents.module').then( m => m.AddDocumentsPageModule)
  },
  {
    path: 'add-maintenance',
    loadChildren: () => import('./modals/add-maintenance/add-maintenance.module').then( m => m.AddMaintenancePageModule)
  },
  {
    path: 'record',
    loadChildren: () => import('./pages/record/record.module').then( m => m.RecordPageModule)
  },
  {
    path: 'details-record',
    loadChildren: () => import('./modals/details-record/details-record.module').then( m => m.DetailsRecordPageModule)
  },
  {
    path: 'details-maintenance',
    loadChildren: () => import('./modals/details-maintenance/details-maintenance.module').then( m => m.DetailsMaintenancePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
