import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentDto } from '../model/appointmentDto';

@Injectable({providedIn: 'root'})
export class AppointmentService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getAllAppointments(): Observable<AppointmentDto[]> {
    return this.http.get<AppointmentDto[]>(`${this.apiServerUrl}/appointments`);
  }

  public addAppointment(appointment: AppointmentDto): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/appointments/add-appointment`, appointment);
}

}
