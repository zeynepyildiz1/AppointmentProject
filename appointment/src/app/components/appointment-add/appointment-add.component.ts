import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.scss']
})
export class AppointmentAddComponent implements OnInit {

  appointmentAddForm : FormGroup;
  updatePage:Boolean=false
  constructor(private formBuilder:FormBuilder, 
    private activatedRoute:ActivatedRoute, 
    private router:Router,
    private appointmentSvc:AppointmentService, private toastrService:ToastrService) { }

    ngOnInit(): void {
      this.createAppointmentAddForm();
      this.activatedRoute.params.subscribe(params=>{
        if(params["id"]){
          this.updatePage=true
       this.getAppointment(params["id"])
        }
      })
     
    }
  getAppointment(id:number){
    this.appointmentSvc.getById(id)
    .subscribe((res:Appointment)=>{
      this.createAppointmentUpdateForm(res)
    },responseError=>{
      console.log(responseError);
      
         this.toastrService.error(responseError.error)
         this.router.navigateByUrl('')
   } )
  }
    createAppointmentAddForm(){
       this.appointmentAddForm = this.formBuilder.group({
        id:[""],
         location:["",Validators.required],
         date: ["",Validators.required],
         withWhom:["", Validators.required]
       })
    }
    createAppointmentUpdateForm(appointment:Appointment){
      this.appointmentAddForm.setValue({
        id:appointment.id,
        location: appointment.location,
        date:new Date(Number(appointment.date)*1000).toISOString().slice(0,16),
        withWhom:appointment.withWhom
     });
   }
    add(){
      if(this.appointmentAddForm.valid){
        this.appointmentAddForm.patchValue({
          date:new Date(this.appointmentAddForm.value.date).getTime()/1000,
        });
        let appointmentModel = Object.assign({},this.appointmentAddForm.value)
        this.appointmentSvc.add(appointmentModel).subscribe(response=>{
        this.toastrService.success("Kaydedildi")
        this.router.navigateByUrl('')
        },responseError=>{
          this.toastrService.error(responseError.error)
          
    })
      }else{
        this.toastrService.error("Lütfen boş alanları doldurunuz.")
      }
    }

    update(){
      if(this.appointmentAddForm.valid){
        this.appointmentAddForm.patchValue({
          date:new Date(this.appointmentAddForm.value.date).getTime()/1000,
        });
        let appointmentModel = Object.assign({},this.appointmentAddForm.value)
        this.appointmentSvc.update(appointmentModel).subscribe(response=>{
        this.toastrService.success("Güncellendi")
        this.router.navigateByUrl('')
        },responseError=>{
          this.toastrService.error(responseError.error)
          
    })
      }else{
        this.toastrService.error("Lütfen boş alanları doldurunuz.")
      }
    }

}
