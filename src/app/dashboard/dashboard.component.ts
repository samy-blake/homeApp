import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../core/header.service';
import { TuiArcChartModule } from '@taiga-ui/addon-charts';
import { TuiBadgeModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TuiArcChartModule, TuiBadgeModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(private _header: HeaderService) {}

  ngOnInit(): void {
    this._header.setPageTitle('Dashboard');
  }
}
