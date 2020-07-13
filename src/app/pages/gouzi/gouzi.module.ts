import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GouziComponent } from './gouzi.component';
import { Routes, RouterModule } from '@angular/router';
import { SpyDirective } from 'src/app/directive/spy.directive';
import { FormsModule } from '@angular/forms';
import { Child3Component } from '../child3/child3.component';
import { UnlessDirective } from 'src/app/directive/unless.directive';

const routes: Routes = [
  {
      path: '',
      component: GouziComponent
  }
];

@NgModule({
  declarations: [GouziComponent, SpyDirective, Child3Component, UnlessDirective],
  imports: [
  CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class GouziModule { }
