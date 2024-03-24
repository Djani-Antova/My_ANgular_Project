import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileDetails } from 'src/app/types/user';
import { emailValidator } from '../validators/email.validator';
import { DOMAINS_FOR_EMAIL } from '../constants';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isEditableMode: boolean = false;
  
  profileDetails: ProfileDetails = {
    username: 'John Doe',
    email: 'johndoe@gmail.com',
    phoneNumber: '1234567890'
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(DOMAINS_FOR_EMAIL)]],
    phoneNumber: ['',]
  })

  constructor(private fb:FormBuilder, private router: Router) {}

  onToggle():void {
    this.isEditableMode = !this.isEditableMode
  }
  
  onSaveHandler():void {
  
    if(this.form.invalid) {
      return
    }

    this.profileDetails = this.form.value as ProfileDetails;
    this.onToggle();
  }

  onCancel(e: Event) {
    e.preventDefault();
    this.onToggle();
  }

    // Navigate to /home when cancel is clicked
    onCancelHandler(): void {
      this.router.navigate(['/home']);
    }
}