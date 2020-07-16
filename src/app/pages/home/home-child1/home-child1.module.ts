import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeChild1Component } from './home-child1.component';

const routes: Routes = [
	{
		path: '',
		component: HomeChild1Component
	}
];
@NgModule({
	declarations: [ HomeChild1Component ],
	imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class HomeChild1Module {}
