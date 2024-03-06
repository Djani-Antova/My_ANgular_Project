import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesAllComponent } from './themes-all/themes-all.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ThemesLimitComponent } from './themes-limit/themes-limit.component';



@NgModule({
  declarations: [
    ThemesAllComponent,
    ThemeDetailsComponent,
    ThemesLimitComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThemesAllComponent,
    ThemeDetailsComponent,
    ThemesLimitComponent
  ]
})
export class ThemesModule { }
