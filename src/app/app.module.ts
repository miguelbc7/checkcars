import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDocumentsPageModule } from './modals/add-documents/add-documents.module';
import { AddMaintenancePageModule } from './modals/add-maintenance/add-maintenance.module';
import { DetailsRecordPageModule } from './modals/details-record/details-record.module';
import { DetailsMaintenancePageModule } from './modals/details-maintenance/details-maintenance.module';
import { DetailRevisionPageModule } from './modals/detail-revision/detail-revision.module';
import { AddRevisionPageModule } from './modals/add-revision/add-revision.module';
import { AddConductoresPageModule } from './modals/add-conductores/add-conductores.module';
import { AddVehiculosPageModule } from './modals/add-vehiculos/add-vehiculos.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    AddDocumentsPageModule,
    AddMaintenancePageModule,
    DetailsRecordPageModule,
    DetailsMaintenancePageModule,
    DetailRevisionPageModule,
    AddRevisionPageModule,
    AddRevisionPageModule,
    AddConductoresPageModule,
    AddVehiculosPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
