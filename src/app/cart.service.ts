import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items = [];

  constructor(
    private http: HttpClient
  ) {}

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

  public getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}
