import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IWine } from '../Modules/i-wine';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url = 'http://localhost:3000/wines';
  public searchQuery = new BehaviorSubject<string>(''); // permette l'aggiornamento della query di ricerca
  currentSearchQuery = this.searchQuery.asObservable(); // permette di osservare la query di ricerca corrente
  constructor (private http: HttpClient) {}

  changeSearchQuery(query: string) { // questo metodo non sostituisce searchWines, ma permette di aggiornare la query di ricerca rendendo possibile la ricerca in tempo reale
    this.searchQuery.next(query);     // con aggiornamento dinamico della card del risultato.
  }

  searchWines(query = ''): Observable<IWine[]> {
    return this.http.get<IWine[]>(`${this.url}?q=${query}`);
  }
}
