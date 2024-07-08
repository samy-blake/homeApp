import { TestBed } from '@angular/core/testing';

import { TempSocketService } from './temp-socket.service';

describe('TempSocketService', () => {
  let service: TempSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
