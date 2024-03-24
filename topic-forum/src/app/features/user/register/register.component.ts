import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DOMAINS_FOR_EMAIL } from '../constants';
import { emailValidator } from '../validators/email.validator';
import { matchPasswordsValidator } from '../validators/match-passwords.validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],                                   
})
export class RegisterComponent {
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

  get passGroup() {
    return this.form.get('passGroup');
  }

  constructor(private fb: FormBuilder, private userServise: UserService, private router: Router ) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const {username, email, passGroup: { password, rePassword} = {}} = this.form.value;
    this.userServise.register(username!, email!, password!, rePassword!).subscribe(() => {
      this.router.navigate(['/themes'])
    })
  }
}
