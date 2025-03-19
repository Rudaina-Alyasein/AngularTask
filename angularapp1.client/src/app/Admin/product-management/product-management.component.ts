import { Component } from '@angular/core';
import { APIURLService } from '../../services/API.service';

@Component({
  selector: 'app-product-management',
  standalone: false,
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.css'
})
export class ProductManagementComponent {
  CategoryData: any
  ProductData: any
  constructor(private _ser: APIURLService) {

  }


  ngOnInit() {
    this.getCategory();
    this.getProducts();
  }

  getCategory() {
    this._ser.getData().subscribe(data => this.CategoryData = data);

  }
  getProducts() {
    this._ser.getProducts().subscribe(data => this.ProductData = data);

  }
  saveProduct(data: any) {
    this._ser.addProduct(data).subscribe(()=>{
      alert("the product added successfuly");
    });
  }

}
