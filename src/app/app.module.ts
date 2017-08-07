import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UpperCasePipe } from '@angular/common'
import { RoutingModule } from '../app/routingmodule/routing.module';
import { LoginModule } from '../app/login/login.module';
import { SharedModule } from './shared//shared.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from '../app/services/login/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {  DI_CONFIG, APP_CONFIG } from '../app/services/app.config';
import {  AppConfig } from '../app/services/Iapp.config';
import { QuestionComponent } from './question/question.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    DashboardComponent,
    QuestionComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LoginModule,
    RoutingModule
  ],
  providers: [LoginService, UpperCasePipe,
    { provide: APP_CONFIG, useValue: DI_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
