import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWine } from '../../Modules/i-wine';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  wines!: Observable<IWine[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.wines = this.http.get<IWine[]>('http://localhost:3000/wines');
  }
}
