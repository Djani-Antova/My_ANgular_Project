import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-theme-search',
  templateUrl: './theme-search.component.html',
  styleUrls: ['./theme-search.component.css']
})
export class ThemeSearchComponent implements OnInit, OnDestroy {

  themesList: Theme[] = [];
  searchThemesList: Theme[] = [];
  subscription!: Subscription;
  errMessage!: string;
  searchTerm: string = ''; // Define the searchTerm

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.apiService.getThemes().subscribe({
      next: (themes) => {
        console.log("Fetched themes:", themes);
        this.themesList = themes;
        this.searchThemesList = themes;
      },
      error: (err) => {
        this.errMessage = err.error.message;
      },
    });
  }

  searchThemes(form: NgForm): void {
    // You can access the searchTerm directly without needing to extract it from the form
    this.searchThemesList = this.themesList
      .filter(theme =>theme.themeName
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase())
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
