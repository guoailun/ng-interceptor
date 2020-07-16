import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GouziComponent } from './pages/gouzi/gouzi.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';
import { Auth2Guard } from './auth/auth2.guard';
import { Auth3Guard } from './auth/auth3.guard';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/welcome' },
	{
		path: 'welcome',
		component: WelcomeComponent
		// canActivate: [ AuthGuard ]

		// loadChildren: () => import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule)
	},
	{
		path: 'home',
		// CanLoad: [Auth2Guard ],
		data: { preload: true },

		loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
	},
	{
		path: 'gouzi',
		canDeactivate: [ Auth3Guard ],

		// component: GouziComponent
		loadChildren: () => import('./pages/gouzi/gouzi.module').then((m) => m.GouziModule)
	},
	{
		path: 'form',
		loadChildren: () => import('./pages/myform/myform.module').then((m) => m.MyformModule)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			routes,
			{
				// enableTracing: true  // 打印所有路由事件
			}
		)
	],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
