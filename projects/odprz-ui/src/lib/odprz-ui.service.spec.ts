import { TestBed } from '@angular/core/testing';

import { OdprzUiService } from './odprz-ui.service';

describe('OdprzUiService', () => {
  let service: OdprzUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdprzUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
