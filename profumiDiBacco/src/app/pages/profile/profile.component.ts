import { Component } from '@angular/core';
import { IUser } from '../../Modules/i-user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../auth/auth.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { IWine } from '../../Modules/i-wine';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  providers: [NgbModalConfig, NgbModal],
})
export class ProfileComponent {
  user!: IUser | undefined;
  wine!: IWine[] | undefined;

  constructor(
    private http: HttpClient,
    private userSvc: UserService,
    private authSvc: AuthService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    this.authSvc.user$.subscribe((res) => (this.user = res || undefined));
    this.authSvc.user$.subscribe((res) => (this.wine = res?.listaVini));
    config.backdrop = 'static';
    config.keyboard = false;
  }

  vendor: boolean | undefined = false;

  ngOnInit() {
    let userString = localStorage.getItem('infoUser');

    if (userString !== null) {
      this.user = JSON.parse(userString);

      this.vendor = this.user?.vendorOrNot;
    } else {
      return;
    }
    this.c();
  }

  // customize default values of modals used by this component tree
  open(content: any) {
    this.modalService.open(content);
  }

  c() {
    console.log(this.user);
    console.log(this.wine);
  }
}
