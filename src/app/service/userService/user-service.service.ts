import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  token:any;
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
  userforgetPassword(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
      })
    }
    return this.httpService.postService('/User/forgetPassword',data,false,header)
  }
  userResetPassword(data:any,token:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization :'Bearer '+ token
      })
    }
    return this.httpService.putService('/User/ResetPassword',data,true,header)
  }
  // userGetAllBooks(token:any){
  //   let header={
  //     headers:new HttpHeaders({
  //       'Content-Type': ' application/json',
  //       Authorization:'Bearer '+ token
  //     })
  //   }
  //   return this.httpService.getService('/Books',true,header);

  // }
}
