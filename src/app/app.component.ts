import { Component, SimpleChanges } from '@angular/core';
import { LoginService } from './services/login/login.service'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _loginService: LoginService, private _routeService: Router) {

  }

  Logout() {
    this._loginService.Logout();
    this._routeService.navigate(['/logout']);

  }

}
