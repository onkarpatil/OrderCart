import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  isLoggedin: boolean;
  constructor() {

  }

  isUserLoggedIn(): boolean {
    return this.isLoggedin;
  }


  Login(userName: string, password: string) {
    if (userName == "test" && password == "test") {
      return this.isLoggedin = true;
    }
  }

  Logout() {
    this.isLoggedin = false;
  }

}
