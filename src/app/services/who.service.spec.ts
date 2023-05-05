import { TestBed } from '@angular/core/testing';

import { WhoService } from './who.service';

describe('WhoService', () => {
  let service: WhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
