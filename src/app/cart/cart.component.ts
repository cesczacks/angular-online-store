import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {
  CartService
} from '../cart.service';
import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  public items: any[];
  public totalPrice: number;

  public checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      price: 0,
    });
  }

  ngOnInit() {
    let sum = 0;
    this.items.forEach(ele => {
      sum += Number(ele.price);
    });
    this.totalPrice = sum;

    this.checkoutForm.get('price').setValue(this.totalPrice);
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.totalPrice = 0;
    this.checkoutForm.reset();

    this.router.navigate([`/`], {
      relativeTo: this.route
    });
  }

}
