import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'profumiDiBacco';


  constructor(private authSvc:AuthService){}

  ngOnInit(){


    this.authSvc.restoreUser()
  }
}
