import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  constructor(private authSvc:AuthService, private searchService: SearchService){}
  show: boolean = false
  logged:boolean= false


  search(event: Event){
    const query = (event.target as HTMLInputElement).value;
    this.searchService.changeSearchQuery(query);
    
  }


  ngOnInit(){

    this.authSvc.isLoggedIn$.subscribe(data=>{this.logged = data})
  }


  logout(){this.authSvc.logout()};
}
