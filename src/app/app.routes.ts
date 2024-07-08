import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TempsComponent } from './temps/temps.component';

export const routes: Routes = [
  {
    component: TempsComponent,
    path: 'temps',
  },
  {
    component: DashboardComponent,
    path: '',
  },
];
