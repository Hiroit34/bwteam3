import { AuthService } from './../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Modules/i-user';
import { IWine } from '../Modules/i-wine';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient){}

  addWine(wine: Partial<IWine>): Observable<IWine> {
    return this.http.post<IWine>(environment.winesUrl, wine);
  }

  deleteWine(wineId: string): Observable<void> {
    const url = environment.winesUrl+'/'+wineId
    return this.http.delete<void>(url);
  }



}
