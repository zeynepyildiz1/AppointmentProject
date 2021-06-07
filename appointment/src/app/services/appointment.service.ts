import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


  apiUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    let newPath = this.apiUrl + "appointment"
    return this.httpClient.get<Appointment[]>(newPath);
  }
  getById(id: Number): Observable<Appointment> {
    let newPath = this.apiUrl + `appointment/${id}`
    return this.httpClient.get<Appointment>(newPath);
  }
  add(Appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(this.apiUrl + `appointment`, Appointment)
  }
  update(Appointment: Appointment): Observable<Appointment> {
    return this.httpClient.put<Appointment>(this.apiUrl + `appointment/${Appointment.id}`, Appointment)
  }
  delete(Appointment: Appointment): Observable<Appointment> {
    return this.httpClient.delete<Appointment>(this.apiUrl + `appointment/${Appointment.id}`)
  }
}
