import { Component } from '@angular/core';

import { APIURLService } from '../services/API.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(private _ser: APIURLService, private _route: Router) 
  {
    
  }


  ngOnInit() { }


  onSubmitData(data:any) {
    this._ser.addUser(data).subscribe(() => {
      alert(
      "the registration done successfuly!")
    })
    this._route.navigate(['/sign-in']); 

  }

}
