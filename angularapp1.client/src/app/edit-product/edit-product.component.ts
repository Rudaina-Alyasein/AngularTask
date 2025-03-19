import { Component } from '@angular/core';
import { APIURLService } from '../services/API.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-edit-product',
  standalone: false,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  CategoryData: any
  ProductData:any
  constructor(private _ser: APIURLService, private _route: Router, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.getCategory();
    const ProductId = this.route.snapshot.paramMap.get("id");

    this._ser.getCategoryById(ProductId).subscribe(data => this.ProductData = data);

  }
  getCategory() {
    this._ser.getData().subscribe(data => this.CategoryData = data);

  }
  updateProduct(data: any) {
    const ProductId = this.route.snapshot.paramMap.get("id");


    if (!ProductId) {
      alert("Product ID is missing!");
      return;
    }


    data.id = ProductId;

    this._ser.EditProduct(data).subscribe(
      () => {
        alert("the data is updated succesfuly");
        this._route.navigate(['/Dashboard/ProductManagement']);
      }



    );

  }

}
