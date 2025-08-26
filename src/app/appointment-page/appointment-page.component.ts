import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { AppointmentService } from '../services/appointment.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AppointmentDto } from '../model/appointmentDto';

@Component({
  selector: 'app-appointment-page',
  imports: [CommonModule, MatTableModule, MatSortModule],
  templateUrl: './appointment-page.component.html',
  styleUrl: './appointment-page.component.css',
  standalone: true
})
export class AppointmentPageComponent {
 public dataSource: MatTableDataSource<AppointmentDto> = new MatTableDataSource();
  public displayedColumns: string[] = ['position', 'phoneNumber', 'make', 'model', 'date', 'note', 'state'];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.getAllAppointments();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public getAllAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe({
  next: (response: AppointmentDto[]) => {
    this.dataSource.data = response;
  },
  error: (error: HttpErrorResponse) => {
    alert(error.message);
  }
});
  }

  announceSortChange(event: any) {
    console.log('Sort changed:', event);
  }
}
