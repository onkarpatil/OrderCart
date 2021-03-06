import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { UpperCasePipe } from '@angular/common'
import { RoutingModule } from '../app/routingmodule/routing.module';
import { LoginModule } from '../app/login/login.module';
import { SharedModule } from './shared//shared.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from '../app/services/login/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DI_CONFIG, APP_CONFIG } from '../app/services/app.config';
import { AppConfig } from '../app/services/Iapp.config';
import { QuestionComponent } from './question/question.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailResolver } from './services/order/order-details-resolver.service';
import { TodoComponent } from './todo/todo.component';
import { ToDoService } from './services/todo/todo.service';
import { ApiInterceptor } from './interceptor/http-interceptor.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr'
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    DashboardComponent,
    QuestionComponent,
    DynamicFormQuestionComponent,
    TodoComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LoginModule,
    RoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [LoginService, UpperCasePipe, ToDoService,
    { provide: APP_CONFIG, useValue: DI_CONFIG },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }, ToastsManager, ToastOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
