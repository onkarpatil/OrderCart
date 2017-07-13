import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class LoginService {
  isLoggedin: boolean = false;
  constructor() {

  }

  isUserLoggedIn(): Observable<boolean> {
    return Observable.of(this.isLoggedin);
  }


  Login(userName: string, password: string): Observable<boolean> {
    if (userName === 'test' && password === 'test') {
      this.isLoggedin = true;
      return Observable.of(this.isLoggedin);
    }
  }

  Logout() {
    this.isLoggedin = false;
  }

}
