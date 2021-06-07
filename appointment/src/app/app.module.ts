import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentAddComponent } from './components/appointment-add/appointment-add.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DateFormatPipe } from './pipes/date-format.pipe'
import { ReactiveFormsModule } from '@angular/forms';
import { NaviComponent } from './components/navi/navi.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppointmentListComponent,
    AppointmentAddComponent,
    DateFormatPipe,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
