import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-themes-all',
  templateUrl: './themes-all.component.html',
  styleUrls: ['./themes-all.component.css']
})
export class ThemesAllComponent implements OnInit {
  themesList: Theme[] = [];
  // subscription!: Subscription; - TODO if needed subscription
  errMessage!: string; 

  constructor(private api: ApiService, ) { }

  ngOnInit(): void {
  

    this.api.getThemes().subscribe({ //getThemes() is a method that returns observable => so we subscribe
      next: (themes) => {
        console.log(themes);
        this.themesList = themes;
        // this.api.getPosts().subscribe((posts) => {  //TODO delete this line from here and include in for each theme, in Theme-details
        //  console.log(posts);
        
      },
      error: (err) => {
        console.error("Error loading themes:", err);
        this.errMessage = err.error.message || 'An error occurred while fetching themes.';
      }
    });
  }
}


