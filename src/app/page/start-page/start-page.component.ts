import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTab } from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import { AppointmentPageComponent } from "../../appointment-page/appointment-page.component";
import { AddAppointmentPageComponent } from "../../add-appointment-page/add-appointment-page.component";
import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-start-page',
  imports: [CommonModule,
    RouterOutlet, MatTab, MatTabsModule, AppointmentPageComponent, AddAppointmentPageComponent, MatGridListModule, MatToolbarModule, MatCardModule],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css',
  standalone: true
})
export class StartPageComponent {

}
