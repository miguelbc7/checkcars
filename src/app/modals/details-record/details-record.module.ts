import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsRecordPageRoutingModule } from './details-record-routing.module';

import { DetailsRecordPage } from './details-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsRecordPageRoutingModule
  ],
  declarations: [DetailsRecordPage]
})
export class DetailsRecordPageModule {}
