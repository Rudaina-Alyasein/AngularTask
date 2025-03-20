import { Component } from '@angular/core';
import { APIURLService } from '../../services/API.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-category-management',
  standalone: false,
  templateUrl: './category-management.component.html',
  styleUrl: './category-management.component.css'
})
export class CategoryManagementComponent {
  CategoryData:any
  constructor(private _ser: APIURLService, private _route: Router) {

  }


  ngOnInit() {
    this.getCategory();
}

  getCategory() {
    this._ser.getData().subscribe(data => this.CategoryData = data);

  }
  saveCategory(data: any) {
    console.log(data);
    this._ser.addCategory(data).subscribe(() => {
   
      alert(
        
        "the adding done successfuly!")
    })


  }
 
}
