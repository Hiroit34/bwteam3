import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private authSvc:AuthService){
    this.authSvc.isLoggedIn$.subscribe(data=>{

      this.logged = data



    // const token= this.authSvc.

    // if(!token){
    //   this.logged = false
    //   this.show=false
    // }else{
    //   this.logged=true
    //   this.show = true
    // }

  // })
})}
  show: boolean = false

  logged:boolean= false





  logout(){

    this.authSvc.logout()

  }
}
