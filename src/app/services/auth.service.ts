import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth=false;
    admin=[
      {
        email:'amidou@gmail.com',
        password:'12345678'
      },
      {
        email:'dihia@gmail.com',
        password:'paige.1999'
      }
    ]
  constructor() { }

  signIn(email,password){
      for(var i=0;i<this.admin.length;i++){
        if(this.admin[i].email === email && this.admin[i].password===password){
         this.isAuth=true;
          return true;
          break;
        }
      }
      return false;
  };

}
