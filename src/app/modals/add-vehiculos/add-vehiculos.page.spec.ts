import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddVehiculosPage } from './add-vehiculos.page';

describe('AddVehiculosPage', () => {
  let component: AddVehiculosPage;
  let fixture: ComponentFixture<AddVehiculosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehiculosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddVehiculosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
