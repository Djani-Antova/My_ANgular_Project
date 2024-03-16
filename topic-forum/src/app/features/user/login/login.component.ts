import { Component } from '@angular/core';

import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email.validator';
import { DOMAINS_FOR_EMAIL } from '../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {

  form = this.fb.group({
    email: ['', [Validators.required, emailValidator(DOMAINS_FOR_EMAIL)],],
    password: ['', [Validators.required, Validators.minLength(5)]],
  })

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {}

  login():void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
    
    this.userService.login();
    this.router.navigate(['/']);
  }

  
}
