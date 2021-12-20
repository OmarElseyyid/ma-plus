import { Injectable } from '@angular/core';

declare let alertify:any

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(msg:string){
    alertify.success(msg)
  }
  warning(msg:string){
    alertify.warning(msg)
  }
  error(msg:string){
    alertify.error(msg)
  }

}
