import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-myform',
	templateUrl: './myform.component.html',
	styleUrls: [ './myform.component.less' ]
})
export class MyformComponent implements OnInit {
	constructor(private router: Router) {
		this.router.events.subscribe((event) => {
			// if (event instanceof NavigationEnd) {
			// 当导航成功结束时执行
			console.log('NavigationEnd:', event);
			// }
		});
	}

	ngOnInit() {}
}
