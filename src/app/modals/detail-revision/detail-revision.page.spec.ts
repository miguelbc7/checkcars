import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailRevisionPage } from './detail-revision.page';

describe('DetailRevisionPage', () => {
  let component: DetailRevisionPage;
  let fixture: ComponentFixture<DetailRevisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRevisionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailRevisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
