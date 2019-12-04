import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsMaintenancePageRoutingModule } from './details-maintenance-routing.module';

import { DetailsMaintenancePage } from './details-maintenance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsMaintenancePageRoutingModule
  ],
  declarations: [DetailsMaintenancePage]
})
export class DetailsMaintenancePageModule {}
