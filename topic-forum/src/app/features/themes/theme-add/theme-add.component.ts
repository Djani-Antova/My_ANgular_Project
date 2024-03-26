import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-theme-add',
  templateUrl: './theme-add.component.html',
  styleUrls: ['./theme-add.component.css']
})
export class ThemeAddComponent {

  constructor(private apiService: ApiService, private router: Router) {}

  addNewTheme(form: NgForm): void {

    if (form.invalid) {
      return;
    }
       
    const { themeName, postText } = form.value;
    this.apiService.addNewTheme(themeName, postText).subscribe(() => {
      this.router.navigate(['/themes'])
    })
    

    // this.subscription = this.apiService.addNewTheme(themeName, postText).subscribe({
    //   next: () => {
    //     this.router.navigate(["/themes"]);
    //   },
    //   error: (err) => this.errMessage = err.error.message
    // })
  }

}