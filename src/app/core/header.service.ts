import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private _pageTitle = new BehaviorSubject<string>('Home App');

  get pageTitle(): Observable<string> {
    return this._pageTitle.asObservable();
  }

  constructor() {}

  setPageTitle(title: string): void {
    this._pageTitle.next(title);
  }
}
