import {
  Component,
  OnInit
} from '@angular/core';
import {
  CartService
} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  public items: any[];
  public totalPrice: number;

  constructor(
    private cartService: CartService
  ) {
    this.items = this.cartService.getItems();
  }

  ngOnInit() {
    let sum = 0;
    this.items.forEach(ele => {
      sum += Number(ele.price);
    });
    this.totalPrice = sum;
  }

}
