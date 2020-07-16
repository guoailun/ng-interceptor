import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../service/base.service';
import { WelcomeService } from './welcome.service';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: [ './welcome.component.less' ]
})
export class WelcomeComponent implements OnInit {
	constructor(private welcomeService: WelcomeService) {}

	ngOnInit() {}

	getAllProject() {
		let map = new Map();
		map.set('1', 'str1');
		map.set(1, 'num1');
		map.set(1, 'num12');
		map['2'] = '2';
		map[2] = 2;
		// console.log(map.get(1));
		// console.log(map['2']); // 2
		// console.log(map.get(2)); // undefined
		// console.log(map.size);

		let recipeMap = new Map([ [ 'cucumber', 500 ], [ 'tomatoes', 350 ], [ 'onion', 50 ] ]);

		console.log(recipeMap);

		for (let entry of recipeMap) {
			// the same as of recipeMap.entries()
			console.log(entry); // cucumber,500 (and so on)
		}

		this.welcomeService.getAllProjects().subscribe(
			(data) => {
				// console.log("data", data);
			},
			(error) => {
				console.log('error', error);
			}
		);

		this.welcomeService.getNotesUsers().subscribe(
			(data) => {
				// console.log("data", data);
			},
			(error) => {
				console.log('error', error);
			}
		);
	}
}
