import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  @Input() User: any;
  @Output() userUpdated = new EventEmitter<any>();
  onImageChange(event: any): void {
    const file = event.target.files[0];  
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.User.avatar = reader.result as string;  
      };
      reader.readAsDataURL(file);  
    }
  }
  saveChanges(): void {
    this.userUpdated.emit(this.User);
  }

}
