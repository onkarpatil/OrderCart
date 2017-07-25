import { Component, Inject } from '@angular/core';
import { LoginService } from './services/login/login.service'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { APP_CONFIG } from './services/app.config';
import { AppConfig } from './services/Iapp.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  _configApi: string;
  containerClass = 'col-md-12';  // class="col-md-8"
  constructor(public _loginService: LoginService, private _routeService: Router
    , @Inject(APP_CONFIG) config: AppConfig) {
    this._configApi = config.title;
  }
  
  ngOnInit() {
    console.log(this._configApi);
    this._loginService.isUserLoggedIn().subscribe((data) => {
      if (data) {
        this.containerClass = 'col-md-8';
      }
    })
  }

  Logout() {
    this._loginService.Logout();
    this._routeService.navigate(['/logout']);

  }

}
