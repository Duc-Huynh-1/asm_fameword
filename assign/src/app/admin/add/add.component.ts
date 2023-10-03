import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/serviecs/products.service';
import { lastValueFrom } from 'rxjs' 
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  productForm = this.formBuilder.group({
    name: ['', [
      Validators.required
    ]],
    price: ['', [Validators.required,Validators.minLength(2)]],
    desc: ['', [Validators.required]],
    img: ['', [Validators.required]],
    
  });
  product!: IProduct;
 

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
    ) { }


    async onHandleSubmit() {
      if (this.productForm.invalid) return;
      try {
        
        
        await lastValueFrom(this.productService.createP(this.productForm.value as IProduct));
        alert('Thêm thành công');
        this.router.navigate(['/admin/product']);
      } catch (error: any) {
        console.log(error.message);
      }
    }
}
