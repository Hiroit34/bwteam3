import { Injectable } from '@angular/core';
import { IWine } from '../Modules/i-wine';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: IWine[] = [];
  constructor() { }

  addtoFavorites(wine: IWine): void{
    const isFavorite = this.favorites.some(favoriteWine => favoriteWine.id === wine.id)

    if(isFavorite) {
      console.log('Questo vino e nei tuoi preferiti');
      return
    }

    this.favorites.push(wine);
    console.log('Vino aggiunto ai preferiti');
  }

  getFavorites(): IWine[]{
    return this.favorites;  
  }

}
