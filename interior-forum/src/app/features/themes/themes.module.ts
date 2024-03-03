import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesAllComponent } from './themes-all/themes-all.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';



@NgModule({
  declarations: [
    ThemesAllComponent,
    ThemeDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThemesAllComponent,
    ThemeDetailsComponent
  ]
})
export class ThemesModule { }
