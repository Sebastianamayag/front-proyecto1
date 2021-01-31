import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/component/home/home.component';
import {FooterComponent} from '../app/component/footer/footer.component';
import {CourseComponent} from '../app/component/course/course.component';


const routes:Routes=[  {
  path: 'home',
  component: HomeComponent,
  data: { title: 'Inicio' }
},
{
  path: 'homeMenu',
  component: HomeComponent,
  data: { title: 'Inicio' }
},
{
  path: 'curso/:id',
  component: CourseComponent,
  data: { title: 'Inicio' }
},
{
  path: 'aboutUs',
  component: FooterComponent,
  data: { title: 'Inicio' }
},
{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
