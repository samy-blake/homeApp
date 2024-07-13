import { Injectable } from '@angular/core';
import { TuiPoint } from '@taiga-ui/core';
import { Observable, Subject } from 'rxjs';

export interface RoomTempsData {
  [key: string]: RoomTempData;
}
export interface RoomTempData {
  pageTitle?: string;
  activeTemp?: number;
  // weeklyTemp?: RoomTempDataWeeklyTemp[];
  weeklyTemp?: TuiPoint[];
  yearTemp?: TuiPoint[];
  // yearTemp?: RoomTempDataYearTemp[];
}

export interface RoomTempDataWeeklyTemp {}
export interface RoomTempDataYearTemp {}

const DEBUG_ROOM_NUMBER_LIST = (): TuiPoint[] => {
  return [
    [0, Math.round(200 * Math.random())],
    [100, Math.round(200 * Math.random())],
    [150, Math.round(200 * Math.random())],
    [200, Math.round(200 * Math.random())],
    [250, Math.round(200 * Math.random())],
    [300, Math.round(200 * Math.random())],
    [350, Math.round(200 * Math.random())],
  ];
};

@Injectable({
  providedIn: 'root',
})
export class RoomTempsDataService {
  private _roomTempData: RoomTempsData = {
    livingroom: {
      pageTitle: 'Wohnzimmer',
      activeTemp: Math.round(35 * Math.random()),
      weeklyTemp: DEBUG_ROOM_NUMBER_LIST(),
      yearTemp: DEBUG_ROOM_NUMBER_LIST(),
    },
    office: {
      pageTitle: 'Büro',
      activeTemp: Math.round(35 * Math.random()),
      weeklyTemp: DEBUG_ROOM_NUMBER_LIST(),
      yearTemp: DEBUG_ROOM_NUMBER_LIST(),
    },
    bedroom: {
      pageTitle: 'Schlafzimmer',
      activeTemp: Math.round(35 * Math.random()),
      weeklyTemp: DEBUG_ROOM_NUMBER_LIST(),
      yearTemp: DEBUG_ROOM_NUMBER_LIST(),
    },
  };

  private _subject: Subject<string> = new Subject();

  get change(): Observable<string> {
    return this._subject.asObservable();
  }

  constructor() {}

  private _exists(room: string): boolean {
    return Object.prototype.hasOwnProperty.call(this._roomTempData, room);
  }

  getRoomTempData(room: string): RoomTempData {
    if (this._exists(room)) {
      return this._roomTempData[room];
    }
    return {
      activeTemp: 0,
      pageTitle: '',
      weeklyTemp: [],
      yearTemp: [],
    };
  }

  getData(): RoomTempsData {
    return this._roomTempData;
  }

  updateRoom(room: string, data: RoomTempData) {
    if (!this._exists(room)) {
      console.error(room, 'dont exists');
      return;
    }

    this._roomTempData[room] = {
      ...this._roomTempData[room],
      ...data,
    };
    this._subject.next(room);
  }
}
