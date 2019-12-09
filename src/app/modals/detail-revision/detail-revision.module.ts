import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRevisionPageRoutingModule } from './detail-revision-routing.module';

import { DetailRevisionPage } from './detail-revision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRevisionPageRoutingModule
  ],
  declarations: [DetailRevisionPage]
})
export class DetailRevisionPageModule {}
