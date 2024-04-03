import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-themes-limit',
  templateUrl: './themes-limit.component.html',
  styleUrls: ['./themes-limit.component.css']
})

export class ThemesLimitComponent implements OnInit, OnDestroy {
  themesLimitList: Theme[] = []
  errMessage!: string;
  subscription!: Subscription;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getThemes().subscribe({
      next: (themes) => {
        this.themesLimitList = themes.slice( -3); 
      },
      error: (err) => {
        this.errMessage = err.message || 'An error occurred while fetching themes.';
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
