import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private authSvc:AuthService){}
  show: boolean = false

  logged:boolean= false

  ngOnInit(){

    this.authSvc.isLoggedIn$.subscribe(data=>{

      this.logged = data

    })


  }
  logout(){

    this.authSvc.logout()

  }
}
