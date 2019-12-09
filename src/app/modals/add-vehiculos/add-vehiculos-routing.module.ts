import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVehiculosPage } from './add-vehiculos.page';

const routes: Routes = [
  {
    path: '',
    component: AddVehiculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVehiculosPageRoutingModule {}
