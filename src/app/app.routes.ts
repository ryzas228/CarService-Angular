import { Routes } from '@angular/router';
import { StartPageComponent } from './page/start-page/start-page.component';
import { AppComponent } from './app.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { AddAppointmentPageComponent } from './add-appointment-page/add-appointment-page.component';

export const routes: Routes = [
  { path: '', component: StartPageComponent, title: 'Home page' },
  { path: 'appointments', component: AppointmentPageComponent, title: 'Appointment page' },
  { path: 'appointments/add-appointment', component: AddAppointmentPageComponent, title: 'Add Appointment page'}
];

export default routes;
