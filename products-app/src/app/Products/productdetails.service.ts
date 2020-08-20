import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct, IResultArray, IResultString } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  private producturl = ('https://localhost:44340/api');

  constructor(private http: HttpClient) { }

  getProductDetails$(): Observable<IResultArray> {
    return this.http.get<IResultArray>(`${this.producturl}/Products`);
}

getProductDetailsByID$(productId: number): Observable<IResultArray> {
    return this.http.get<IResultArray>(`${this.producturl}/Products/${productId}`);
}

addNewProductDetail$(product: IProduct): Observable<IResultString> {
    return this.http.post<IResultString>(`${this.producturl}/Products` , product);
}

updateProductDetail$(product: IProduct): Observable<IResultString> {
    return this.http.put<IResultString>(`${this.producturl}/Products`,  product);
}

deleteProductDetail$(productId: number): Observable<IResultString> {
    return this.http.delete<IResultString>(`${this.producturl}/Products/${productId}`);
}
}
