import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gouzi',
  templateUrl: './gouzi.component.html',
  styleUrls: ['./gouzi.component.less']
})
export class GouziComponent implements OnInit {

  constructor() { }

  heroes = ['zw', 'lz', 'wp']
  heroname = '';
  condition = false;

  propetryName = 'name1'
  deepPropetryName = {
    name: 'deepName'
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  add() {
    this.heroes.push(this.heroname);
  }

  reset() {
    this.heroes = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges');
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck');
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit');
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    
  }

  ngOnDestroy(): void {
    // console.log('ngOnChanges');
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

}
