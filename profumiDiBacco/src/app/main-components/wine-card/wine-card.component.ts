import { Component, Input, OnInit } from '@angular/core';
import { IWine } from '../../Modules/i-wine';
import { FavoritesService } from '../../services/favorites.service';
import { IUser } from '../../Modules/i-user';

@Component({
  selector: 'app-wine-card',
  templateUrl: './wine-card.component.html',
  styleUrls: ['./wine-card.component.scss'],
})
export class WineCardComponent implements OnInit {
  @Input() wine!: IWine;
  @Input() user!: IUser;

  constructor(private favoritesService : FavoritesService) {}

  ngOnInit() {
    if (this.user && this.wine) {
      this.addToFavorites();
    }
  }

  addToFavorites() {
    if (this.user.id && this.wine.id){
      this.favoritesService.addToFavorites(this.user.id, this.wine.id).subscribe(()=> {
        alert('Prodotto aggiunto ai tuoi preferiti!');
      });
    } else {
      alert('Errore: utente o vino non trovati');
    }
  }
}