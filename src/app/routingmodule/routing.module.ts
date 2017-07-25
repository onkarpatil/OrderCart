import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomeComponent } from '../home/home.component';
import { LoginService } from '../services/login/login.service';
import { AuthGuard } from '../services/guards/auth.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'customer',
        canActivate: [AuthGuard],
        data: { preload: true },
        loadChildren: 'app/customer/customer.module#CustomerModule'
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
