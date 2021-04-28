import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'Home2', component: Home2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
