import { Component, OnInit } from '@angular/core';
import{ LoginService} from '../services/login/login.service'
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _loginService:LoginService, private _routeService:Router) {

   }

  ngOnInit() {
    this.loginForm = this.fb.group({
            userName: [null, Validators.required],
            password: [null, Validators.required],           
        });
  }

  login(user)
  {    
    let isLoginSuccess =  this._loginService.Login(user.userName, user.password);
    this._routeService.navigate(['/home'])
      
  }

}
