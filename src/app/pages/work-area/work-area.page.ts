import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
//Pages
import { AddDocumentsPage } from '../../modals/add-documents/add-documents.page';
import { AddMaintenancePage } from '../../modals/add-maintenance/add-maintenance.page';
import { DetailsMaintenancePage } from '../../modals/details-maintenance/details-maintenance.page';
import { DetailRevisionPage } from '../../modals/detail-revision/detail-revision.page';
import { AddRevisionPage } from '../../modals/add-revision/add-revision.page';

@Component({
  selector: 'app-work-area',
  templateUrl: './work-area.page.html',
  styleUrls: ['./work-area.page.scss'],
})

export class WorkAreaPage implements OnInit {
  constructor(public modalController: ModalController) { 
    //this.viewMode = "first";
  }

  ngOnInit() {
  }

  async addDocuments() {
    const modal = await this.modalController.create({
      component: AddDocumentsPage,
      cssClass: 'modalDocs'
    });
    return await modal.present();
  }

  async addDocumentsMaintenance() {
    const modal = await this.modalController.create({
      component: AddMaintenancePage,
      cssClass: 'modalMaintenance'
    });
    return await modal.present();
  }

  async detailsMantenimiento() {
    const modal = await this.modalController.create({
      component: DetailsMaintenancePage,
      cssClass: 'modalDetails'
    });
    return await modal.present();
  }

  async detailsRevision() {
    const modal = await this.modalController.create({
      component: DetailRevisionPage,
      cssClass: 'modalDetailsRevision'
    });
    return await modal.present();
  }

  async AddRevision() {
    const modal = await this.modalController.create({
      component: AddRevisionPage,
      cssClass: 'modalRevision'
    });
    return await modal.present();
  }

}
