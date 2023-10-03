import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/serviecs/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any = [];
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe({
      next: (data) => { this.products = data.data },
      error: (error) => { console.log('error', error.message) },
      complete: () => { console.log('complete') }
    })
  }
}
