import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVehiculosPageRoutingModule } from './add-vehiculos-routing.module';

import { AddVehiculosPage } from './add-vehiculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVehiculosPageRoutingModule
  ],
  declarations: [AddVehiculosPage]
})
export class AddVehiculosPageModule {}
