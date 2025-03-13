import { Component } from '@angular/core';
import { APIURLService } from '../services/API.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private _Productservice: APIURLService, private route: ActivatedRoute,
)//inject service to component
  {

  }
  ngOnInit() {
    this.getProducts();
  }
  categoryId:any
  Products: any
  filteredProducts:any
  getProducts() {
    this.categoryId = this.route.snapshot.paramMap.get("id");

    if (this.categoryId) {
      //console.log("hi");
      this._Productservice.getProducts().subscribe((data) => {
        this.Products = data;

        this.filteredProducts = this.Products.filter((product: any) => product.categoryId == this.categoryId);
      });
    }
  }
}
