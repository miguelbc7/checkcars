import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddConductoresPage } from './add-conductores.page';

describe('AddConductoresPage', () => {
  let component: AddConductoresPage;
  let fixture: ComponentFixture<AddConductoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConductoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddConductoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
