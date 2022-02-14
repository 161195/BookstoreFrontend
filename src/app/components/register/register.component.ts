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
  submitted = true;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      FullName: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      Phone: ['', [Validators.required]],
  });
}
onSubmit() { 
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
}
