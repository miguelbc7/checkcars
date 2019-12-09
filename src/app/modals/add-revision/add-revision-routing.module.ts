import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRevisionPage } from './add-revision.page';

const routes: Routes = [
  {
    path: '',
    component: AddRevisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRevisionPageRoutingModule {}
