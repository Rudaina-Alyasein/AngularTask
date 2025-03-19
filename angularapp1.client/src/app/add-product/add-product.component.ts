import { Component } from '@angular/core';
import { APIURLService } from '../services/API.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  constructor(private _ser: APIURLService, private _route: Router) {

  }


  ngOnInit() { }


  saveProduct(data: any) {
    this._ser.addProduct(data).subscribe(() => {
      alert(
        "the product added successfuly!")
    })
    this._route.navigate(['/CategoryPage']); 

  }
}
