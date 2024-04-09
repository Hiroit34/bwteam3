import { Component, Input } from '@angular/core';
import { IWine } from '../../Modules/i-wine';

@Component({
  selector: 'app-wine-card',
  templateUrl: './wine-card.component.html',
  styleUrl: './wine-card.component.scss'
})
export class WineCardComponent {
 @Input() wine!: IWine;
 
}
