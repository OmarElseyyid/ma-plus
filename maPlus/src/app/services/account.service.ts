import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../login/user';
import { Login } from '../login/login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  path=environment.API_URL;

  CheckToken():Observable<any>{
    const httpOptions = {
      headers:new HttpHeaders({
        'Authorization':'Bearer '+ localStorage.getItem("Token")
      })
    }
    return this.http.get<any>(this.path + '/users/me', httpOptions);
  }

  addUser(usr:User):Observable<any>{
    return this.http.post<User>(this.path+ '/auth/local/register',usr).pipe(
      tap(data=> console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  login(loginData:Login):Observable<any>{
    return this.http.post<Login>(this.path+'/auth/local', loginData).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
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

  isLogged(){
    if (localStorage.getItem("Token")) {
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem("Token");
  }





}
