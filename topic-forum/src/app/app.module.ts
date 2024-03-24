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
import { HowWorksComponent } from './features/how-works/how-works.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { cookieInterceptorProvider } from './core/cookie.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HowWorksComponent,

  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    ThemesModule,
    HttpClientModule,
    ThemesModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [cookieInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
