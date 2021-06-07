import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {

  constructor(public authSvc:AuthService) { }

  ngOnInit(): void {

  }
logout(){
  localStorage.removeItem('token');
}
}
