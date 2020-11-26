import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuimeraItemsComponent} from './quimera-items/quimera-items.component';
import {QuimeraAboutComponent} from './quimera-about/quimera-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },

  {
    path: 'items',
    component: QuimeraItemsComponent
  },
  {
    path: 'about',
    component: QuimeraAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
