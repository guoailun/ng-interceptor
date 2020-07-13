import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  missionAnnounce = this.missionAnnouncedSource.asObservable();
  missionConfirme = this.missionConfirmedSource.asObservable();

  announce(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  mission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }

}
