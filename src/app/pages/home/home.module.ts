import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { HighlightDirective } from 'src/app/directive/highlight.directive';
import { MyPipePipe } from 'src/app/pipe/my-pipe.pipe';
import { HomeChild1Component } from './home-child1/home-child1.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'child-a',
				component: HomeChild1Component
			}

			// {
			// 	path: '**',
			// 	redirectTo: 'home'
			// }
		]
	}
];

@NgModule({
	declarations: [
		HomeComponent,
		Child1Component,
		Child2Component,
		HighlightDirective,
		MyPipePipe,
		HomeChild1Component
	],
	imports: [ CommonModule, FormsModule, RouterModule.forChild(routes) ]
})
export class HomeModule {}
