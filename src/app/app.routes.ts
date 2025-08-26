import { Routes } from '@angular/router';
import { StartPageComponent } from './page/start-page/start-page.component';
import { AppComponent } from './app.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';

export const routes: Routes = [
  { path: '', component: StartPageComponent, title: 'Home page' },
  { path: 'start', component: AppointmentPageComponent, title: 'Home page' }
];

export default routes;
