import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiThemeNightModule,
  TuiBrightness,
} from '@taiga-ui/core';

import {
  TuiThemeNightService,
  TuiThemeService,
} from '@taiga-ui/addon-doc/services';

import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './core/navigation/navigation.component';
import { HeaderComponent } from './core/header/header.component';
import { RoomTempsDataService } from './core/room-temps-data.service';
import { TempSocketService } from './core/temp-socket.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TuiThemeNightModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    NavigationComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'homeApp';
  constructor(
    @Inject(TuiThemeNightService) readonly night: TuiThemeNightService,
    private _roomTempsData: RoomTempsDataService,
    private _tempSocket: TempSocketService
  ) {}

  get mode(): TuiBrightness | null {
    return this.night.value ? 'onDark' : null;
  }

  ngOnInit(): void {
    // this._tempSocket.subject.subscribe({
    // TODO: add parser
    //   next: (msg) => {
    //     console.log(msg);
    //   },
    //   error: (err) => console.error(err),
    //   complete: () => console.log('disconnected'),
    // });
    // this._tempSocket.callDay();
  }

  ngOnDestroy(): void {
    this._tempSocket.close();
  }
}
