import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable 
  ({
  providedIn: 'root'
})
export class APIURLService {

  constructor(private _url: HttpClient) 
  { }
  getData(): Observable<any>{
      return this._url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }
  getProducts() {
    return this._url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }


  addUser(data : any) {
    return this._url.post<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users" , data);
  }
  getUser() {
    return this._url.get("https://67cea6ee125cd5af757b6514.mockapi.io/Users");
  }
  addCategory(data: any) {
    return this._url.post<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories", data);
  }
  addProduct(data: any) {
    return this._url.post<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products", data);
  }
}
