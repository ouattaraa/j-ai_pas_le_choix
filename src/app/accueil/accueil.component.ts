import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  etat:boolean;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.etat=this.authService.isAuth;
  }

  oui:boolean;
  non:boolean;

  accord(){
     this.oui=true;
  }
  desaccord(){
    this.non=false;
  }
 
}
