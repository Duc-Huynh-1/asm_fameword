import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/serviecs/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any = [];
  
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe({
      next: (data) => { this.products = data.data },
      error: (error) => { console.log('error', error.message) },
      complete: () => { console.log('complete') }
    })
  }
}
