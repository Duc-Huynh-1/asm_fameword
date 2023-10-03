import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/serviecs/products.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  searchText: string = "";
  products: IProduct[] = [];
  
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe({
      next: (data) => { this.products = data.data },
      error: (error) => { console.log('error', error.message) },
      complete: () => { console.log('complete') }
    })
  }

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct(){
    this.productService.getAll().subscribe({
      next: (data) => { this.products = data.data },
      error: (error) => { console.log('error', error.message) },
      complete: () => { console.log('complete') }
    })
  }

  removeProduct(id: number | string) {
    if (window.confirm('Are you fucking sure??')) {
      this.productService.removeProduct(id).subscribe({
        next: () => {
          alert('Fucking sure thành công!');
          this.getAllProduct()
        }
      })
    }
  }
  onHandleRemove(id: any) {
    console.log(id);
    this.removeProduct(id);
    // 
  }
}