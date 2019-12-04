import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

//Page
import { DetailsRecordPage } from '../../modals/details-record/details-record.page';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async details() {
    const modal = await this.modalController.create({
      component: DetailsRecordPage,
      cssClass: 'modalRecord'
    });
    return await modal.present();
  }

}
