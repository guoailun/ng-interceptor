import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../service/base.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  constructor(private baseService: BaseService) { }

  ngOnInit() {
  }

  getAllProject () {
    // this.baseService.getConfig().subscribe(data => {
    //   console.log('data', data);
    // }, (error) => {
    //     console.log('error', error);
    // })
  }

}
