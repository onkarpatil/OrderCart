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

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LoginModule,
    RoutingModule
  ],
  providers: [LoginService, UpperCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
