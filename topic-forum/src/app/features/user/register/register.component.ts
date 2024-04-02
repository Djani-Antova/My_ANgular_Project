import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DOMAINS_FOR_EMAIL } from '../constants';
import { emailValidator } from '../validators/email.validator';
import { matchPasswordsValidator } from '../validators/match-passwords.validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],                                   
})
export class RegisterComponent implements OnInit, OnDestroy {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(DOMAINS_FOR_EMAIL)],],
    passGroup: this.fb.group({
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]],
    }, {
      validators: [matchPasswordsValidator('password', 'rePassword')]
    }),
  });

  errMessage: string = '';
  private subscription: Subscription = new Subscription();

  get passGroup() {
    return this.form.get('passGroup');
  }

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router ) {}

  ngOnInit(): void {
    // Subscribe to the error observable from UserService
    this.subscription.add(
        this.userService.error$.subscribe(error => {
            this.errMessage = error || 'An unknown error occurred'; // Provide a default message
        })
    );
}

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const {username, email, passGroup: { password, rePassword} = {}} = this.form.value;
    this.userService.register(username!, email!, password!, rePassword!).subscribe(() => {
      this.router.navigate(['/themes'])
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
