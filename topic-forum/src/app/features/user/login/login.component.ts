import { Component, OnDestroy } from '@angular/core';

import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email.validator';
import { DOMAINS_FOR_EMAIL } from '../constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnDestroy {

  subscription!: Subscription;
  errMessage!: string;  

  form = this.fb.group({
    email: ['', [Validators.required, emailValidator(DOMAINS_FOR_EMAIL)],],
    password: ['', [Validators.required, Validators.minLength(5)]],
  })

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {}

  login():void {
    if (this.form.invalid) {
      return;
    }

    const email: string = this.form.value.email!; // ! -> non-null assertion operator to assert that these values are strings.
    const password: string = this.form.value.password!;
    
    this.userService.login(email, password).subscribe({
      next: () => {
        this.router.navigate(["/"]);
      },
      error: (err) => this.errMessage = err.error.message
    })    
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
