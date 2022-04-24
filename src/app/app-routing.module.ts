import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
   { path: '',component:AboutComponent },
  {path:'movie',component:MoviesListComponent},
{path:'home',component:HomeComponent},
{path:'help',component:HelpcenterComponent},
{path:'about',component:AboutComponent},
{path:'login',component:LoginComponent},
{path:'loginsuccess',component:LoginsuccessComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
