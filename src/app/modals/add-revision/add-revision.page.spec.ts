import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRevisionPage } from './add-revision.page';

describe('AddRevisionPage', () => {
  let component: AddRevisionPage;
  let fixture: ComponentFixture<AddRevisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRevisionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRevisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
