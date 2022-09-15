import { Router } from '@angular/router';
import { authService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder,private authServ:authService,private router:Router) { }

  ngOnInit(): void {
  }
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
  login(){
    alert('You are successfully Logged In!')
    this.router.navigate(['/home'])
    return this.authServ.login();
  }
}
