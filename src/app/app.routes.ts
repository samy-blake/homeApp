import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TempsComponent } from './temps/temps.component';
import { RoomTempsComponent } from './temps/room-temps/room-temps.component';

export const routes: Routes = [
  {
    component: TempsComponent,
    path: 'temps',
  },
  {
    path: 'temps/:room',
    component: RoomTempsComponent,
  },
  {
    component: DashboardComponent,
    path: '',
  },
];
