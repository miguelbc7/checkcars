import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRevisionPageRoutingModule } from './add-revision-routing.module';

import { AddRevisionPage } from './add-revision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRevisionPageRoutingModule
  ],
  declarations: [AddRevisionPage]
})
export class AddRevisionPageModule {}
