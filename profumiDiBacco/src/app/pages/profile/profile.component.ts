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
  providers: [NgbModalConfig, NgbModal]
})
export class ProfileComponent {
  user: IUser | undefined;

  newWine:Partial<IWine> = {}
  selectedCurrency: string = 'EUR';

  constructor(private authSvc: AuthService,
              private userService: UserService,
              config: NgbModalConfig,
              private modalService: NgbModal,
              private CrudService:CrudService,
            private route:Router
            )
               {


    const infoUser= localStorage.getItem('infoUser')

    if(!infoUser){

      route.navigate(['/auth/login'])
    }else{



      this.user = JSON.parse(infoUser)

    }


  }

  vendor: boolean | undefined = false;

  ngOnInit() {



    this.vendor = this.user?.vendorOrNot;
  }

  open(content: any) {
    this.modalService.open(content);
  }




  addNewWine(newWine:Partial<IWine>) {

    this.CrudService.addWine(newWine).subscribe()


      this.modalService.dismissAll();
    }
  }



