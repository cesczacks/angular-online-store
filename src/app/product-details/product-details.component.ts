import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  products
} from '../products';
import {
  CartService
} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {

  public product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[params.get('productId')];
    });
  }

  public addToCart(product) {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
  }

}
