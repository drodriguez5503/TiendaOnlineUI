import { TestBed } from '@angular/core/testing';

import { OrderItemComsService } from './order-item-coms.service';

describe('OrderItemComsService', () => {
  let service: OrderItemComsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderItemComsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
