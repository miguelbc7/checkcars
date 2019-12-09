import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailRevisionPage } from './detail-revision.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRevisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRevisionPageRoutingModule {}
