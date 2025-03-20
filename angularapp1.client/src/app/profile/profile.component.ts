import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  User: any = null;

  ngOnInit(): void {
    let LoggedINuser = localStorage.getItem('loggedUser');

    if (LoggedINuser) {
      this.User = JSON.parse(LoggedINuser);
      console.log(this.User);

    } else {
      console.log("No user found in localStorage");
    }
  }
  
  updateUser(updatedUser: any): void {
    localStorage.setItem('loggedUser', JSON.stringify(updatedUser));
    this.User = updatedUser;
  }

}
