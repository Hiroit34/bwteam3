import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IWine } from '../../Modules/i-wine';
import { ICartITem } from '../../Modules/i-cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  cartItem: ICartITem[] = []
  
  constructor(private cartService: CartService) {}


  ngOnInit() {
    this.cartService.currentCart.subscribe(cart => this.cartItem = cart);
  }

  updateQuantity(wine: IWine, quantity: number){
    this.cartService.updateQuantity(wine, quantity);
  }

  removeFromCart(wine: IWine){
    this.cartService.removeFromCart(wine);
  }

  getTotal(){
    return this.cartService.getTotal();
  } 
  
}
