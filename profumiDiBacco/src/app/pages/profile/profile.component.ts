import { Component } from '@angular/core';
import { IUser } from '../../Modules/i-user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user!: IUser | undefined

  constructor(private http: HttpClient, private authSvc: AuthService) {
    this.authSvc.user$.subscribe(res => this.user = res || undefined)
  }



}
