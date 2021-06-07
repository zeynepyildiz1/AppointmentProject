import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AppointmentAddComponent } from '../appointment-add/appointment-add.component';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[];
  dataLoaded: Boolean = false;
  constructor(private appointmentSvc: AppointmentService, private toastrSvc: ToastrService) { }

  ngOnInit(): void {
    this.getAppointments()
  }
  getAppointments() {
    this.appointmentSvc.getAppointments()
      .subscribe((res) => {
        this.appointments = res;
        this.dataLoaded = true;
      })
  }
  remove(appointment: Appointment) {
    this.appointmentSvc.delete(appointment)
      .subscribe(() => {
        this.toastrSvc.success('Randevu silindi')
        this.getAppointments()
      })
  }

}
