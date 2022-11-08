import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';

const routes: Routes = [
  { path: 'Assignment1', component: Assignment1Component },
  { path: 'Assignment3', component: Assignment3Component },
  { path: 'Assignment4', component: Assignment4Component }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
