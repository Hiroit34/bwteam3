import { CrudService } from './../../services/crud.service';
import { Component } from '@angular/core';
import { IWine } from '../../Modules/i-wine';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../auth/auth.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { IUser } from '../../Modules/i-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class ProfileComponent {
  user: IUser | undefined;

  newWine: Partial<IWine> = {};
  selectedCurrency: string = 'EUR';

  listaVini:IWine[]=[]

  constructor(
    private authSvc: AuthService,
    private userService: UserService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private CrudService: CrudService,
    private route: Router,
    private http: HttpClient
  ) {
    const infoUser = localStorage.getItem('infoUser');

    if (!infoUser) {
      route.navigate(['/auth/login']);
    } else {
      this.user = JSON.parse(infoUser);
    }
  }

  vendor: boolean | undefined = false;

  ngOnInit() {
    this.http.get<IWine[]>('http://localhost:3000/wines')
    .subscribe(res=>{

      this.listaVini=res.filter(el=> el.userId == this.user?.id)

    })



    this.vendor = this.user?.vendorOrNot;
  }

  open(content: any) {
    this.modalService.open(content);
  }

  addNewWine(newWine: Partial<IWine>) {
    newWine.userId = this.user?.id;

    this.CrudService.addWine(newWine).subscribe();

    this.modalService.dismissAll();
  }

  deleteWine(wineId: string) {
    this.CrudService.deleteWine(wineId).subscribe(() => {
        if (this.user && this.user.addedWine) {
            this.user.addedWine = this.user.addedWine.filter(wine => wine.id.toString() !== wineId);
        }
    });
}
}
