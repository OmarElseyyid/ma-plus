import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
import { Product } from '../product/product';

@Injectable()
export class ProductService {

  path= "http://localhost:3000/products";
  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err:HttpErrorResponse){
    let error_msg = ""
    if (err.error instanceof ErrorEvent) {
      error_msg = "Bit hata olustu "+ err.error.message
    }
    else{
      error_msg = "Sitemsel bit hata olustu"
    }
    return throwError(error_msg)
  }

}
