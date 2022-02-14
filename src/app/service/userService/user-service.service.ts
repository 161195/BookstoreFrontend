import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService:HttpServiceService) { }
  userRegister(data:any){
    let header={
      headers:new HttpHeaders({
        // 'Content-Type': 'application/json-patch+json'
        'Content-Type':' application/json'
      })
    }
    return this.httpService.postService('/User',data,false,header)
  }
  userLogin(data:any){
    let header={
      headers:new HttpHeaders({
        // 'Content-Type': 'application/json-patch+json'
        'Content-Type':' application/json'
      })
    }
    return this.httpService.postService('/User/Login',data,true,header)
  }
}
