import { Time } from "@angular/common";

export interface Appointment{
    id:Number;
    location:string,
    date:Date,
    time:Time,
    withWhom:string
}