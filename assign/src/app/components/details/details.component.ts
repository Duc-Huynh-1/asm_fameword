import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/serviecs/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  products: any = {};
  constructor(private productService: ProductService, private router : ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id')
    
    this.productService.getById(id).subscribe({
      next: (data) => {
        this.products = data.data
      } 
    })
  }
}
