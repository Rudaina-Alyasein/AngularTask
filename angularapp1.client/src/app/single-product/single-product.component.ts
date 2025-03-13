import { Component } from '@angular/core';
import { APIURLService } from '../services/API.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  standalone: false,
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  constructor(private _SingleProductService: APIURLService, private route: ActivatedRoute) { }
  ngOnInit(){
    this.getProduct();
  }
  ProductId: any
 singleProduct: any
  getProduct() {
    this.ProductId = this.route.snapshot.paramMap.get("id");

    if (this.ProductId) {
      //console.log("hi");
      this._SingleProductService.getProducts().subscribe((data) => {

        this.singleProduct = data.filter((product: any) => product.id ==this.ProductId);
      });
    }
  }

}
