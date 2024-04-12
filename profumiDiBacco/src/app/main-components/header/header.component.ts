import { SearchService } from './../../services/search.service';
import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  show: boolean = false;
  logged: boolean = false;

  constructor(private authSvc: AuthService,public searchService:SearchService, public cartService: CartService) {
    this.authSvc.isLoggedIn$.subscribe((data) => {
      this.logged = data;
    });
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

    if (!targetElement.closest('.dropdown-menu-left') && this.show) {
      this.show = false;
    }
  }

  logout() {
    this.authSvc.logout();
  }

  search(event: Event){
    const query = (event.target as HTMLInputElement).value;
    this.searchService.changeSearchQuery(query);

  }
}
