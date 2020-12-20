import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/component/home/home.component';
import {FooterComponent} from '../app/component/footer/footer.component';


const routes:Routes=[  {
  path: '',
  component: HomeComponent,
  data: { title: 'Inicio' }
},
{
  path: 'otra',
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
