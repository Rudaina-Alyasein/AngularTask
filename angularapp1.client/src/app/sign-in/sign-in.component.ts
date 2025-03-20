import { Component } from '@angular/core';
import { APIURLService } from '../services/API.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
 
  constructor(private _ser: APIURLService , private _route :Router) {

  }
  ngOnInit() {

  }
  userData:any
  onSubmitForm(UserLogged: any) {
    this._ser.getUser().subscribe((data: any) => {
      console.log(data[0].password); 

      let user = data.find((p: any) => p.Email == UserLogged.Email && p.password == UserLogged.password);
      if (user) {
        // تخزين بيانات المستخدم في localStorage
        localStorage.setItem('loggedUser', JSON.stringify(user));
        alert('LogIn Successfully');
        this._route.navigate(['/']); 
      } else {
        alert('Invalid Email or password');
      }
    }, (error) => {
      console.error('Error fetching user:', error);
    });
  }
}
