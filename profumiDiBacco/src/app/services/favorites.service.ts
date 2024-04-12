import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IWine } from '../Modules/i-wine';
import { IUser } from '../Modules/i-user';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor(private http: HttpClient) { }

  addToFavorites(userid: number, wineid: number): Observable<any> {
    return this.http.post(`${environment.usersUrl}/${userid}/favorites`, { wineid });
  }

  removeFromFavorites(userid: number, wineid: number): Observable<any> {
    return this.http.delete(`${environment.usersUrl}/${userid}/favorites/${wineid}`);
  }
}