import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderService } from '../../core/header.service';
import { ActivatedRoute } from '@angular/router';
import {
  TuiArcChartModule,
  TuiAxesModule,
  TuiLineChartModule,
} from '@taiga-ui/addon-charts';
import {
  RoomTempData,
  RoomTempsDataService,
} from '../../core/room-temps-data.service';

interface RoomTempRouteParams {
  room: string;
}

@Component({
  selector: 'app-room-temps',
  standalone: true,
  imports: [TuiArcChartModule, TuiLineChartModule, TuiAxesModule],
  templateUrl: './room-temps.component.html',
  styleUrl: './room-temps.component.scss',
})
export class RoomTempsComponent implements OnInit {
  private _roomTempData: RoomTempData = {};
  private _activeRoute: string = '';

  public chartWidth: number = 0;

  get roomTempData(): RoomTempData {
    return this._roomTempData;
  }
  get weekChartWidth() {
    const list = this._roomTempData?.weeklyTemp?.map((v) => v[0]) || [];
    return Math.max(...list);
  }

  constructor(
    private _header: HeaderService,
    private _activatedRoute: ActivatedRoute,
    private _roomTempsData: RoomTempsDataService
  ) {}
  ngOnInit(): void {
    this.chartWidth = window.innerWidth;
    this._activatedRoute.params.subscribe((params) => {
      this._activeRoute = (params as RoomTempRouteParams).room;
      this._updateData();
      this._header.setPageTitle('Temperatur: ' + this._roomTempData.pageTitle);
    });

    this._roomTempsData.change.subscribe(() => {
      this._updateData();
    });
  }

  private _updateData(): void {
    this._roomTempData = this._roomTempsData.getRoomTempData(this._activeRoute);
  }
}
