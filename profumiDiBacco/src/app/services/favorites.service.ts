import { Injectable } from '@angular/core';
import { IWine } from '../Modules/i-wine';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: IWine[] = [];
  private dbUrl = 'http://localhost:3000/users';
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  isFavorite(wine: IWine): boolean {
    return this.favorites.some(favoriteWine => favoriteWine.id === wine.id);
  }

  addtoFavorites(wine: IWine): void{
    const isFavorite = this.favorites.some(favoriteWine => favoriteWine.id === wine.id)

    this.favorites.push(wine);
    const userId = this.authService.getUserId(); // Assuming there is a method in the AuthService to get the userId
    this.http.patch(`${this.dbUrl}/${userId}`, {favoriteWine: this.favorites}).subscribe();
  }

  removeFromFavorites(wine: IWine): void {
    const index = this.favorites.findIndex(favoriteWine => favoriteWine.id === wine.id);
     this.favorites.splice(index, 1);

     const userId = this.authService.getUserId();
     if(userId){
        this.http.patch(`${this.dbUrl}/${userId}`, {favoriteWine: this.favorites}).subscribe();
     }
  }

  getFavorites(): IWine[]{
    return this.favorites;  
  }

}
