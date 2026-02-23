import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent], 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'] 
})
export class ProductListComponent {

  products = input.required<Product[]>();

  removeProduct(id: number) {
    const index = this.products().findIndex(p => p.id === id);
    if (index !== -1) {
      this.products().splice(index, 1);
    }
  }
}