import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsRecordPage } from './details-record.page';

describe('DetailsRecordPage', () => {
  let component: DetailsRecordPage;
  let fixture: ComponentFixture<DetailsRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsRecordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
