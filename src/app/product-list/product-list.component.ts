import {
  Component,
  OnInit
} from '@angular/core';
import {
  products
} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  public products;

  constructor() {}

  ngOnInit() {
    this.products = products;
  }

  share() {
    alert('The product has been shared!');
  }

  onNotify() {
    alert('You will be notified when the product goes on sale');
  }

}
