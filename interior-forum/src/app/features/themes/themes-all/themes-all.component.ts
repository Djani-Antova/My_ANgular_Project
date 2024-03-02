import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-themes-all',
  templateUrl: './themes-all.component.html',
  styleUrls: ['./themes-all.component.css']
})
export class ThemesAllComponent implements OnInit {

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getThemes().subscribe(themes => { //getThemes() is a method that returns observable => we subscribe
      console.log(themes);
      
    })          
  }

}
