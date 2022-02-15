import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  loginForm!: FormGroup;
  submitted = true;
  switchCard: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      FullName: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      Phone: ['', [Validators.required]],    
  });
  this.loginForm = this.formBuilder.group({
    EmailId: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(6)]],  
});
}
cardSwap() {
  console.log(this.switchCard);
   return this.switchCard === true ? (this.switchCard = false) : (this.switchCard = true); //condition operator
}
Register() { 
  this.submitted=true;
  if(this.registrationForm.valid)
  {
    console.log(this.registrationForm.value);
    let register={
      fullName:this.registrationForm.value.FullName,
      emailId:this.registrationForm.value.Email,
      password:this.registrationForm.value.Password,
      mobileNumber:this.registrationForm.value.Phone,

   }
   this.userService.userRegister(register).subscribe((response:any)=>{
     console.log(response)
   })
  }
  else
  {
    console.log("invalid");
  }
}
Login() { 
  this.submitted=true;
  if(this.loginForm.valid)
  {
    console.log(this.loginForm.value);
    let login={
      emailId:this.loginForm.value.EmailId,
      password:this.loginForm.value.Password,
   }
   this.userService.userLogin(login).subscribe((response:any)=>{
    localStorage.setItem('token',response.jwtToken)
     console.log(response)
   })
  }
  else
  {
    console.log("invalid");
  }
}

}
