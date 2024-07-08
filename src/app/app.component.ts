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

import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './core/navigation/navigation.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AppComponent {
  title = 'homeApp';
  constructor(
    @Inject(TuiThemeNightService) readonly night: TuiThemeNightService
  ) {}

  get mode(): TuiBrightness | null {
    return this.night.value ? 'onDark' : null;
  }
}
