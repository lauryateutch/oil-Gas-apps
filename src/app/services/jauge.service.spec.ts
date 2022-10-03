import { TestBed } from '@angular/core/testing';

import { JaugeService } from './jauge.service';

describe('JaugeService', () => {
  let service: JaugeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JaugeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
