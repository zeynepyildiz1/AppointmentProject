import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { TokenModel } from '../models/tokenModel';

import { LoginModel } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiAuthUrl
  constructor(private httpClient: HttpClient) { }


  login(loginModel:LoginModel){
    return this.httpClient.post<TokenModel>(this.apiUrl+"login",loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }



}