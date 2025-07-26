import { Routes } from '@angular/router';
import { LoginComponent } from './auth/desktop/login/login.component';
import { SignupComponent } from './auth/desktop/signup/signup.component';
import { LandingpageheroComponent } from './landingpagehero/landingpagehero.component';

export const routes: Routes = [
  { path: '', component:  LandingpageheroComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
];
