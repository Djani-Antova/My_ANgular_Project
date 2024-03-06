import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-themes-limit',
  templateUrl: './themes-limit.component.html',
  styleUrls: ['./themes-limit.component.css']
})

export class ThemesLimitComponent implements OnInit {
  themesLimitList: Theme[] = []
  errMessage!: string;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getThemes().subscribe({
      next: (themes) => {
        this.themesLimitList = themes.slice(0, 3); // Take only the first 3 themes
        console.log('Limited themes to display:', this.themesLimitList); // Log limited themes
      },
      error: (err) => {
        this.errMessage = err.message || 'An error occurred while fetching themes.';
      },
    });
  }
}
