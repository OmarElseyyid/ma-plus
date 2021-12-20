import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
import { Category } from '../category/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //path= "http://localhost:3000/categories"; json server
  path= environment.API_URL;

  constructor(private http:HttpClient) { }

  getCategories():Observable<Category[]>{

    return this.http.get<Category[]>(this.path+"/categories").pipe(
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
