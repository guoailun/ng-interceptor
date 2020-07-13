import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.less'],
  inputs: ['clearanceItem', 'astronaut'],
  outputs: ['buyEvent'] //失败了
})
export class Child1Component implements OnInit {

  public clearanceItem: number;
  public item: any;
  public a ;
  // @Output() buyEvent = new EventEmitter();
  
  private buyEvent = new EventEmitter();
  value = '';

  constructor() { }

  ngOnInit() {
  }

  expression() {
    this.buyEvent.emit('12345');
  }

  update(value: string) { this.value = value; }

}
