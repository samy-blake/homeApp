import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class TempSocketService {
  private _subject = new Subject();
  // private _subject = webSocket({
  //   url: 'ws://localhost:8000',
  //   binaryType: 'arraybuffer',
  // });

  public get subject(): Subject<unknown> {
    return this._subject;
  }
  // public get subject(): WebSocketSubject<unknown> {
  //   return this._subject;
  // }
  constructor() {}

  callDay(): void {
    this._subject.next({
      action: 'day',
      room: 'Fokuspokuss-Air.fritz.box',
    });
  }

  close(): void {
    this._subject.complete();
  }
}
