import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ThemeAddComponent } from './theme-add/theme-add.component';
import { ThemesAllComponent } from './themes-all/themes-all.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemesLimitComponent } from './themes-limit/themes-limit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostEditComponent } from './post-edit/post-edit.component';



@NgModule({
  declarations: [
    ThemeDetailsComponent,
    ThemeAddComponent,
    ThemesAllComponent,
    ThemesLimitComponent,
    PostEditComponent,
  ],
  imports: [
    CommonModule, ThemeRoutingModule, FormsModule, SharedModule
  ],
  exports: [
    ThemesAllComponent,
    ThemeDetailsComponent,
    ThemesLimitComponent
  ]
})
export class ThemesModule { }
