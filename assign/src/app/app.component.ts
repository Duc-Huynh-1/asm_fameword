import { Component } from '@angular/core';


// metadata
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//typescripte class
export class AppComponent {
  title = 'assign';
  // formatPrice(price: number): string {
  //   const formattedPrice = price.toFixed(2); // Làm tròn đến 2 chữ số thập phân
  //   return formattedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " VND";
  // }
  

}
