import {
  Component,
  OnInit
} from '@angular/core';
import {
  CartService
} from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.less']
})
export class ShippingComponent implements OnInit {

  public shippingCosts;

  constructor(
    private cartService: CartService
  ) {
    this.shippingCosts = cartService.getShippingPrices();
  }

  ngOnInit() {}

}
