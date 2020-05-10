import { AccueilComponent } from './accueil/accueil.component';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatRadioModule} from '@angular/material/radio';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ContainComponent } from './contain/contain.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainMessageComponent } from './contain-message/contain-message.component';
import { AuthGuardService } from './services/auth-guard.service';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ContainComponent,
    AccueilComponent,
    ContainMessageComponent,
    QuestionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatComponentsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    RouterModule.forRoot([
      {
        path:'login',
        component:AuthComponent,
      },

      {
        path:'contain-message',
        component:ContainMessageComponent,
        canActivate:[AuthGuardService],
      },
      {
        path:'accueil',
        component:AccueilComponent,
        canActivate:[AuthGuardService],
      },

      {
        path:'questions',
        component:QuestionComponent,
        canActivate:[AuthGuardService],
      },
    ]),
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
