import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualisePumpGasStationAgentPage } from './visualise-pump-gas-station-agent.page';

describe('VisualisePumpGasStationAgentPage', () => {
  let component: VisualisePumpGasStationAgentPage;
  let fixture: ComponentFixture<VisualisePumpGasStationAgentPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualisePumpGasStationAgentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualisePumpGasStationAgentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
