import { WelcomeComponent } from './welcome/welcome.component';
import { CanActivateService } from './service/can-activate.service';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BusinessComponent } from './business/business.component';
import { TechComponent } from './tech/tech.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'home',component:TopheadlineComponent,canActivate:[CanActivateService]},
  {path:'tech',component:TechComponent,canActivate:[CanActivateService]},
  {path:'business',component:BusinessComponent,canActivate:[CanActivateService]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
