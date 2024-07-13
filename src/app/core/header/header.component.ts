import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  Event as NavigationEvent,
} from '@angular/router';
import { TuiAppBarModule } from '@taiga-ui/experimental';
import { HeaderService } from '../header.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TuiAppBarModule, NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public pageTitle: string = '';
  public isHome: boolean = true;
  constructor(private _router: Router, private _header: HeaderService) {}

  ngOnInit(): void {
    this._header.pageTitle.subscribe((pageTitle: string) => {
      this.pageTitle = pageTitle;
    });
    this._router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.isHome = event.url.split('/').filter((v) => v).length <= 1;
      }
    });
  }

  public back(): void {
    if (this.isHome) return;
    history.back();
  }
}
