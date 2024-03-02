import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesAllComponent } from './themes-all/themes-all.component';



@NgModule({
  declarations: [
    ThemesAllComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThemesAllComponent
  ]
})
export class ThemesModule { }
