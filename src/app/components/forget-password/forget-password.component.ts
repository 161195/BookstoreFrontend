import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;
  submitted = true;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      EmailId: ['', [Validators.required, Validators.email]],
  });
  }
  ForgetPassword() { 
    this.submitted=true;
    if(this.forgetPasswordForm.valid)
    {
      console.log(this.forgetPasswordForm.value);
      let forgetPassword={
       emailId:this.forgetPasswordForm.value.EmailId,    
     }
     this.userService.userforgetPassword(forgetPassword).subscribe((response:any)=>{
       console.log(response)
     })
    }
    else
    {
      console.log("invalid");
    }
  }

}
