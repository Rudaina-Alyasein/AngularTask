import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class APIURLService {

  constructor(private _url: HttpClient) { }
    getData(){
      return this._url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }
  getProducts() {
    return this._url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }
  
}
