import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authStatus:boolean;
  status:boolean;
  error="your email/password is invalid!"

  form=new FormGroup({

    email:new FormControl('',[Validators.required,
                              Validators.minLength(11),
                              Validators.maxLength(50),
                              Validators.email,
                            ]),
    password:new FormControl(
          '' ,[
          Validators.minLength(8),
          Validators.maxLength(100),
          Validators.required
    ])
  })
  constructor(private authService:AuthService,  
              private router:Router) { }

  ngOnInit(): void {
    this.authStatus=this.authService.isAuth;
  }

  onSignIn(){

       if(this.authService.signIn(this.email.value,this.password.value)){
          this.router.navigate(['/questions']); 
          this.status=true;
       }else{
         this.status=false;
       };
  }

get email(){
  return this.form.get('email');
}
get password(){
  return this.form.get('password');
}
}
