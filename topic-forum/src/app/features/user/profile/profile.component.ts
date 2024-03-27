import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileDetails } from 'src/app/types/user';
import { emailValidator } from '../validators/email.validator';
import { DOMAINS_FOR_EMAIL } from '../constants';
import { Router } from '@angular/router'; 
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEditableMode: boolean = false;
  
  profileDetails: ProfileDetails = {
    username: '',
    email: '',
    // phoneNumber: ''
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(DOMAINS_FOR_EMAIL)]],
    // phoneNumber: ['']
  })

  constructor(private fb:FormBuilder, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    const {username, email,} = 
    this.userService.user!
    this.profileDetails = {
      username,
      email,
      // phoneNumber,   
    };
    this.form.setValue({
      username,
      email
    })
  }

  onToggle():void {
    this.isEditableMode = !this.isEditableMode
  }
  
  saveHandler():void {
  
    if(this.form.invalid) {
      return
    }

    this.profileDetails = this.form.value as ProfileDetails;
    const { username, email} = this.profileDetails

    this.userService.updateProfile(username, email).subscribe(() => {
      this.onToggle();
    })

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