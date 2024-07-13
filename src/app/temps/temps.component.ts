import { Component, OnInit } from '@angular/core';
import { TuiArcChartModule } from '@taiga-ui/addon-charts';
import { TuiSvgModule } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';
import { HeaderService } from '../core/header.service';
import {
  RoomTempsData,
  RoomTempsDataService,
} from '../core/room-temps-data.service';

@Component({
  selector: 'app-temps',
  standalone: true,
  imports: [TuiArcChartModule, TuiSvgModule, RouterLink],
  templateUrl: './temps.component.html',
  styleUrl: './temps.component.scss',
})
export class TempsComponent implements OnInit {
  private _roomTempData: RoomTempsData = {};

  get roomTemps(): RoomTempsData {
    return this._roomTempData;
  }

  constructor(
    private _header: HeaderService,
    private _roomTempsData: RoomTempsDataService
  ) {}

  ngOnInit(): void {
    this._header.setPageTitle('Temperatur');
    this._roomTempsData.change.subscribe(() => {
      this._updateData();
    });
    this._updateData();
  }

  private _updateData(): void {
    this._roomTempData = this._roomTempsData.getData();
  }
}
