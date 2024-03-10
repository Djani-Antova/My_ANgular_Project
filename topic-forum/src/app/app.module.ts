import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ThemesModule } from './features/themes/themes.module';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './features/not-found/not-found.component'
import { HomeComponent } from './features/home/home.component';
import { UserModule } from './features/user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    ThemesModule,
    HttpClientModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
