import { authService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate{

  constructor(private authServ:authService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authServ.isAuthenticated()){
      return true;
    }
    else{
      this.router.navigate(['/login'])
      alert('Login to your account to continue!')
      return false;
    }
  }
}
