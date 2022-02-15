import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  submitted = true;
  token:any;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserServiceService,private ActivatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });
  this.token=this.ActivatedRouter.snapshot.paramMap.get('token');
  }
ResetPassword() { 
    this.submitted=true;
    if(this.resetPasswordForm.valid)
    {
      console.log(this.resetPasswordForm.value,this.token);
      let resetPassword={
      newPassword:this.resetPasswordForm.value.password,
      confirmPassword:this.resetPasswordForm.value.ConfirmPassword,       
     }
     this.userService.userResetPassword(resetPassword,this.token).subscribe((response:any)=>{
       console.log("any msggg",response)
     })
    }
    else
    {
      console.log("invalid");
    }
  }


}
