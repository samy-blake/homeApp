import { TuiTabBarModule } from '@taiga-ui/addon-mobile';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor, NgForOf } from '@angular/common';

interface Item {
  icon: string;
  text: string;
  path: string[];
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [TuiTabBarModule, RouterModule, NgForOf],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  activeItemIndex = 1;

  readonly items: Item[] = [
    {
      text: 'Dashboard',
      icon: 'tuiIconPieChartLarge',
      path: [''],
    },
    {
      text: 'Temps',
      icon: 'tuiIconActivityLarge',
      path: ['temps'],
    },
  ];

  constructor() {}
}
