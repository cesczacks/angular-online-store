import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items = [];

  constructor() {}

  public addToCart(product): void {
    this.items.push(product);
  }

  public getItems(): any[] {
    return this.items;
  }

  public clearCart(): any[] {
    this.items = [];
    return this.items;
  }

}
