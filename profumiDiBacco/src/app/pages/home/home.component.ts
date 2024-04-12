import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWine } from '../../Modules/i-wine';
import { SearchService } from '../../services/search.service';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  wines!: Observable<IWine[]>;
  results: IWine[] = []; // Explicitly type results as an array of IWine objects
  constructor(private http: HttpClient, public searchService: SearchService) {}

  ngOnInit() {
    this.wines = this.http.get<IWine[]>('http://localhost:3000/wines');

    this.searchService.currentSearchQuery.subscribe(query => {
      this.http.get<IWine[]>(`http://localhost:3000/wines?q=${query}`).subscribe(data => {
        this.results = [...data];
      });
    });	
  }
}
