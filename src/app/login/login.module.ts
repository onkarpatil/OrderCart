import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { AuthGuard } from '../services/guards/auth.guard';
import { LoginService } from '../services/login/login.service';



@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'login', component: LoginComponent },
            { path: 'logout', component: LoginComponent }
        ])
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        LoginService,
        AuthGuard
    ]
})
export class LoginModule { }
