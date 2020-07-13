import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { HomeService } from './home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  @ViewChild(Child1Component, {static: false})
  private childComponent: Child1Component;

  ngOnInit() {
  }

  submitMessage = "123456";

  onSubmit(event: any) {
    console.log("event====>", event);
  }

  callFax(value: any) {
    console.log("value====>", value);
  }

  crossOffItem(event: any) {
    console.log(event)
  }

  fun2() {
    this.childComponent.update("parent click2");
  }

  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  nextMission = 0;
  subscription: Subscription;


  constructor(private missionService: HomeService) {
    this.subscription = missionService.missionAnnounce.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.mission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }

}
