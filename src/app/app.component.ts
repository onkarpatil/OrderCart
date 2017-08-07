import { Component, Inject, OnInit } from '@angular/core';
import { LoginService } from './services/login/login.service'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { APP_CONFIG } from './services/app.config';
import { AppConfig } from './services/Iapp.config';
import { QuestionService } from './services/question/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent implements OnInit {
  title = 'app';
  _configApi: string;
  questions: any[];
  containerClass = 'col-md-12';  // class="col-md-8"
  constructor(public _loginService: LoginService, private _routeService: Router
    , @Inject(APP_CONFIG) config: AppConfig, private queService: QuestionService) {
    this._configApi = config.title;
    this.questions = this.queService.getQuestions();
  }

  ngOnInit() {
    console.log(this.questions);
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
