import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { GouziComponent } from '../pages/gouzi/gouzi.component';

@Injectable({
	providedIn: 'root'
})
export class Auth3Guard implements CanDeactivate<GouziComponent> {
	canDeactivate(
		component: GouziComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return window.confirm('没有保存，要离开吗？');
	}
}
