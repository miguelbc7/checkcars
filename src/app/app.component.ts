import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// Pages 
import { AddConductoresPage } from './modals/add-conductores/add-conductores.page';
import { AddVehiculosPage } from './modals/add-vehiculos/add-vehiculos.page';
import { LoginPage } from './pages/login/login.page'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    public modalController: ModalController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async addConductores() {
    const modal = await this.modalController.create({
      component: AddConductoresPage,
      cssClass: 'modalForm'
    });
    return await modal.present();
  }

  async addVehiculos() {
    const modal = await this.modalController.create({
      component: AddVehiculosPage,
      cssClass: 'modalForm'
    });
    return await modal.present();
  }


  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }
}
