import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _loginService: LoginService, private _routerService: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log('In canActivate: ' + state.url);
    return this.checkLogin(url);
  }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }


  checkLogin(url: string): boolean {

    if (this._loginService.isLoggedin) {
      return true;
    }
    // Store the attempted URL for redirecting
    //this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this._routerService.navigate(['/login']);
    return false;
  }

}
