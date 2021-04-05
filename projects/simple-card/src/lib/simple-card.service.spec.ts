import { TestBed } from '@angular/core/testing';

import { SimpleCardService } from './simple-card.service';

describe('SimpleCardService', () => {
  let service: SimpleCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
