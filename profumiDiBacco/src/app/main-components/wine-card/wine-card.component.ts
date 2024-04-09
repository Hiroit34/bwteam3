import { Component, Input } from '@angular/core';
import { IWine } from '../../Modules/i-wine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wine-card',
  templateUrl: './wine-card.component.html',
  styleUrl: './wine-card.component.scss'
})
export class WineCardComponent {
 @Input() wine!: IWine;
 
constructor (private router: Router){}

 goToDetails(wine: IWine):void{
  this.router.navigate(['/details', wine.id]);
}

}
