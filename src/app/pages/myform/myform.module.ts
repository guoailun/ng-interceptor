import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyformComponent } from './myform.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MyformComponent
  }
];

@NgModule({
  declarations: [MyformComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MyformModule { }
