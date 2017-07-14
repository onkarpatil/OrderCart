import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UpperCasePipe } from '@angular/common'
import { RoutingModule } from '../app/routingmodule/routing.module';
import { LoginModule } from '../app/login/login.module';
import { SharedModule } from './shared//shared.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from '../app/services/login/login.service';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './services/guards/auth.guard';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    OrderComponent
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
