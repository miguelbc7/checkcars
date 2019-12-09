import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddConductoresPageRoutingModule } from './add-conductores-routing.module';

import { AddConductoresPage } from './add-conductores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddConductoresPageRoutingModule
  ],
  declarations: [AddConductoresPage]
})
export class AddConductoresPageModule {}
