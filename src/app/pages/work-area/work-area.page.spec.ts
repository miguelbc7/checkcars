import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkAreaPage } from './work-area.page';

describe('WorkAreaPage', () => {
  let component: WorkAreaPage;
  let fixture: ComponentFixture<WorkAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
