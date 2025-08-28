import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AppointmentService } from '../services/appointment.service';
import { AppointmentDto } from '../model/appointmentDto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-appointment-page',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-appointment-page.component.html',
  styleUrl: './add-appointment-page.component.css'
})
export class AddAppointmentPageComponent {
 appointment: AppointmentDto = {
    id: 0,
    phoneNumber: '',
    make: '',
    model: '',
    date: '',
    note: '',
    state: ''
  };

  constructor(private appointmentService: AppointmentService) {}

  addAppointmentOnClick(): void {
    this.appointmentService.addAppointment(this.appointment).subscribe({
      next: (response) => {
        console.log("Appointment saved successfully!", response);

        // reset the form
        this.appointment = {
          id: 0,
          phoneNumber: '',
          make: '',
          model: '',
          date: '',
          note: '',
          state: ''
        };
      },
      error: (err) => {
        console.error("Error saving appointment", err);
      }
    });
  }
}
