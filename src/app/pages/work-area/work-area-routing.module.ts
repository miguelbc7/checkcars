import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkAreaPage } from './work-area.page';

const routes: Routes = [
  {
    path: '',
    component: WorkAreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkAreaPageRoutingModule {}
