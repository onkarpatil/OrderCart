import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class LoginService {
  isLoggedin: boolean;
  constructor() {

  }

  isUserLoggedIn():  Observable<boolean> {
   return Observable.of(true).delay(1000).do(val => this.isLoggedin = true);
  }


  Login(userName: string, password: string):Observable<boolean> {
    if (userName == "test" && password == "test") {
     return Observable.of(true).delay(1000).do(val => this.isLoggedin = true);
    }
  }

  Logout() {
    this.isLoggedin = false;
  }

}
