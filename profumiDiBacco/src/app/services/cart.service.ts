import { Injectable, OutputEmitterRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWine } from '../Modules/i-wine';


interface ICartItem {
  wine: IWine;
  quantity: number;

}

@Injectable({
  providedIn: 'root'
})
export class CartService {
getCartItemCount() {
  const currentCart = this.cart.value;
  let itemCount = 0;
  for (let i = 0; i < currentCart.length; i++){
    itemCount += currentCart[i].quantity;
  }
  return itemCount;
}

  private cart = new BehaviorSubject<ICartItem[]>([]);
  currentCart = this.cart.asObservable();
  private discount = new BehaviorSubject<number>(0);
  currentDiscount = this.discount.asObservable();

  constructor() { }

  addToCart(wine: IWine, quantity: number) {
   const currentCart = this.cart.value;
   const itemIndex = currentCart.findIndex(item => item.wine.id === wine.id);
   if( itemIndex > -1) {
     currentCart[itemIndex].quantity += quantity;
   } else {
    currentCart.push({wine, quantity});
   }
   this.cart.next(currentCart);
  }

  removeFromCart(wine: IWine){
    const currentCart = this.cart.value;
    const itemIndex = currentCart.findIndex(item => item.wine.id === wine.id);
    if (itemIndex > -1) {
      currentCart.splice(itemIndex, 1);
      this.cart.next(currentCart);
    }
  }

  updateQuantity(wine: IWine, quantity: number){
    const currentCart = this.cart.value;
    const itemIndex = currentCart.findIndex(item => item.wine.id === wine.id);
    if (itemIndex > -1) {
      currentCart[itemIndex].quantity = quantity;
      this.cart.next(currentCart);
    }
  }

  applyDiscount(discount: number){
    this.discount.next(discount);
  }

  getTotal(){
    const currentCart = this.cart.value;
    const total = currentCart.reduce((acc, item) => acc + item.wine.prezzo * item.quantity, 0);
    const discount = this.discount.value;
    return total * (1 -discount / 100);
  }

  clearCart(){
   this.cart.next([]);
  }

}