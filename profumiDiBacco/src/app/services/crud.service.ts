import { AuthService } from './../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Modules/i-user';
import { IWine } from '../Modules/i-wine';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  allWines: IWine[] =[]

  urlWines = environment.winesUrl;

  wines = new BehaviorSubject<IWine[]>([]);

  $wines = this.wines.asObservable();
  constructor(private http: HttpClient) {
    this.getWines().subscribe()
  }

  addWine(wine: Partial<IWine>): Observable<IWine> {
    return this.http.post<IWine>(environment.winesUrl, wine)
    .pipe(tap( w=>{

      this.allWines.push(w)

      this.wines.next(this.allWines)
    }))
  }

  deleteWine(wineId: number): Observable<void> {
    const url = environment.winesUrl + '/' + wineId;

    let indexDelete=this.allWines.findIndex(res=> res.id === wineId)

    this.allWines.splice(indexDelete,1)

    this.wines.next(this.allWines)

    return this.http.delete<void>(url);
  }


  getWines() {
    return this.http.get<IWine[]>(this.urlWines).pipe(
      tap((r) => {
      this.wines.next(r);
    }));
  }
}
