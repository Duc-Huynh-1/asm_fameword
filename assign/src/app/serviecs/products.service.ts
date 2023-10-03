import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = `http://localhost:3001/product`;
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.API_URL)
  }
  getById(id: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/` + id);
  }
  // getAll trả về một observable  sau đó xử lý = cách  sử dụng this.http.get để đến địa chỉ xác định this.API_URL
  createP(product: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/add`, product);
  }
 
  removeProduct(id: string | number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/delete/${id}`)
  }
  updateP(product: any, id: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/update/` + id, product)
  }
}