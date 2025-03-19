import { Component } from '@angular/core';
import { APIURLService } from '../services/API.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products-page1',
  standalone: false,
  templateUrl: './products-page1.component.html',
  styleUrl: './products-page1.component.css'
})
export class ProductsPage1Component {
  constructor(private _Productservice: APIURLService, private route: ActivatedRoute,
  )//inject service to component
  {

  }
  ngOnInit() {
    this.getProducts();
  }
  categoryId: any
  Products: any
  filteredProducts: any
  getProducts() {
    this.categoryId = this.route.snapshot.paramMap.get("id");

    if (this.categoryId) {
      this._Productservice.getProducts().subscribe((data) => {
        this.Products = data;

        this.filteredProducts = this.Products.filter((product: any) => product.categoryId == this.categoryId);
      });
    }
  }
}
