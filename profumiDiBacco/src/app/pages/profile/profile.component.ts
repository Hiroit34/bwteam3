import { CrudService } from './../../services/crud.service';
import { Component } from '@angular/core';
import { IWine } from '../../Modules/i-wine';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../auth/auth.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { IUser } from '../../Modules/i-user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ProfileComponent {
  user: IUser | undefined;

  newWine:Partial<IWine> = {}
  selectedCurrency: string = 'EUR';

  constructor(private http: HttpClient,
              private authSvc: AuthService,
              private userService: UserService,
              config: NgbModalConfig,
              private modalService: NgbModal,
              private CrudService:CrudService) {
    this.authSvc.user$.subscribe(res => this.user = res || undefined)
    config.backdrop = 'static';
    config.keyboard = false;
  }

  vendor: boolean | undefined = false;

  ngOnInit() {
    this.vendor = this.user?.vendorOrNot;
  }

  open(content: any) {
    this.modalService.open(content);
  }




  addNewWine() {
    this.CrudService.addWine(this.newWine as IWine).subscribe(response => {
      if (this.user && this.user.addedWine) {
        this.user.addedWine.push(response);
        // Aggiorna la lista degli utenti
        // Non hai fornito il codice per il metodo 'updateUserList' del 'UserService'
        // Quindi puoi chiamarlo come necessario per aggiornare la lista degli utenti
      }
      this.modalService.dismissAll();
    });
  }
}


