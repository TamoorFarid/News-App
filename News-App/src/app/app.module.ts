import { authService } from './service/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import{HttpClientModule} from '@angular/common/http'
import { NewsAppapiService } from './service/news-appapi.service';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms'
import { CanActivateService } from './service/can-activate.service';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    TechComponent,
    BusinessComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    ReactiveFormsModule

  ],
  providers: [NewsAppapiService,CanActivateService,authService],
  bootstrap: [AppComponent]
})
export class AppModule { }
