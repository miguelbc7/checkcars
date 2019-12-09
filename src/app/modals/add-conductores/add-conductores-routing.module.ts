import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddConductoresPage } from './add-conductores.page';

const routes: Routes = [
  {
    path: '',
    component: AddConductoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddConductoresPageRoutingModule {}
