import { TestBed } from '@angular/core/testing';

import { ProdCommunicationService } from './prod-communication.service';

describe('ProdCommunicationService', () => {
  let service: ProdCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
