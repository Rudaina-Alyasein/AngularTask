import { Component } from '@angular/core';
import { APIURLService } from '../services/API.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-category',
  standalone: false,
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent {
  CategoryData: any
  categoryId: any
  filteredCategory :any
  constructor(private _ser: APIURLService, private _route: Router, private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.getCategory();

  }
  getCategory() {
    this.categoryId = this.route.snapshot.paramMap.get("id");
    console.log(this.categoryId);


    if (this.categoryId) {
      this._ser.getData().subscribe((data) => {
        this.CategoryData = data;
        console.log(this.CategoryData);


        this.filteredCategory = this.CategoryData.find((Category: any) => Category.id == this.categoryId);
        console.log(this.filteredCategory);

      });
    }
  }
 
  updateCategory(data: any) {
    const categoryId = this.route.snapshot.paramMap.get("id");

    if (!categoryId) {
      alert("Category ID is missing!");
      return;
    }

   
    data.id = categoryId;

    this._ser.EditCategory(data).subscribe(
      () => {
        this._route.navigate(['/Dashboard/CategoryManagement']);
      }


      
    );

  }
}
