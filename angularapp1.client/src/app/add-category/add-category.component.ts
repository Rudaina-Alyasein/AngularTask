import { Component } from '@angular/core';
import { APIURLService } from '../services/API.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  constructor(private _ser: APIURLService, private _route: Router) {

  }


  ngOnInit() { }


  saveCategory(data: any) {
    this._ser.addCategory(data).subscribe(() => {
      alert(
        "the adding done successfuly!")
    })

  }
}
