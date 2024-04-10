import { Component } from '@angular/core';
import { IUser } from '../../Modules/i-user';
import { IWine } from '../../Modules/i-wine';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../auth/auth.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ProfileComponent {
  user: IUser | undefined;
  newWine: IWine = {
    id: 0,
    nome: '',
    annata: 0,
    provenienza: '',
    tipo: '',
    prezzo: 0,
    casa_vinicola: '',
    casa_vinicola_url: '',
    immagine_url: '',
    descrizione: ''
  };
  selectedCurrency: string = 'EUR';

  constructor(private http: HttpClient,
              private authSvc: AuthService,
              private userService: UserService,
              config: NgbModalConfig,
              private modalService: NgbModal) {
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

  onVinoImageSelected(event: any) {
    // Gestione della selezione dell'immagine del vino
    const file = event.target.files[0];
    if (file) {
      // Esempio di caricamento dell'immagine
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newWine.immagine_url = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onCasaVinicolaImageSelected(event: any) {
    // Gestione della selezione dell'immagine della casa vinicola
    const file = event.target.files[0];
    if (file) {
      // Esempio di caricamento dell'immagine
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newWine.casa_vinicola_url = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  addNewWine() {
    if (this.user?.vendorOrNot && this.user.id && this.newWine) {
      this.http.post<any>(`http://localhost:3000/wines`, this.newWine).subscribe(response => {
        if (this.user && this.user.favoriteWine) {
          this.user.favoriteWine.push(response);
          this.userService.updateUserList(); // Update the user list
        }
        this.modalService.dismissAll();
      });
    }
  }

}
