import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesAllComponent } from './themes-all/themes-all.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ThemesLimitComponent } from './themes-limit/themes-limit.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemeAddComponent } from './theme-add/theme-add.component';



@NgModule({
  declarations: [
    ThemesAllComponent,
    ThemeDetailsComponent,
    ThemesLimitComponent,
    ThemeAddComponent
  ],
  imports: [
    CommonModule, ThemeRoutingModule
  ],
  exports: [
    ThemesAllComponent,
    ThemeDetailsComponent,
    ThemesLimitComponent
  ]
})
export class ThemesModule { }
