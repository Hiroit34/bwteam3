import { Component } from '@angular/core';
import { ILogin } from '../../Modules/i-login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  loginData:ILogin = {
    email:'',
    password:''
  }
  submitted: boolean = false;
  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

    signIn(){

      this.authSvc.login(this.loginData)
      .subscribe(data => {
        this.router.navigate(['/'])
      })

    }
}
