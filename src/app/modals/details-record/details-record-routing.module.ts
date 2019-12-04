import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsRecordPage } from './details-record.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRecordPageRoutingModule {}
