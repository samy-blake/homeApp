import { TestBed } from '@angular/core/testing';

import { RoomTempsDataService } from './room-temps-data.service';

describe('RoomTempsDataService', () => {
  let service: RoomTempsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomTempsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
