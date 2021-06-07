import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentAddComponent } from './components/appointment-add/appointment-add.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full", component:AppointmentListComponent, canActivate:[LoginGuard]},
  {path:"appointment/add", component:AppointmentAddComponent, canActivate:[LoginGuard]},
  {path:"appointment/update/:id", component:AppointmentAddComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
