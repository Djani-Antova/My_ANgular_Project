import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { HomeComponent } from './features/home/home.component';

// import { ErrorComponent } - TODO make it


  const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: '/home'
    },
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'error', component: NotFoundComponent
    },
    {
      path: '**', component: NotFoundComponent
    }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
