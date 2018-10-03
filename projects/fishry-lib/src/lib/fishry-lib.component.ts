import { Component, OnInit } from '@angular/core';
import { FishryLibService } from './fishry-lib.service';



@Component({
  selector: 'fishry-fishry-lib',
  template: `
    <h1>
      fishry-lib works!
    </h1>
    <button (click)="setName('doe')">Set Name To Munir</button>
    <h4 class="colored-text">{{name}}</h4>
    <a [routerLink]="['']">Go to vader</a>
  `,
  styles: []
})
export class FishryLibComponent implements OnInit {
  name: string = '';
  constructor(public fishryService: FishryLibService) { }

  ngOnInit() {
    this.fishryService._name.subscribe((name: string) => this.name = name);
  }

  setName(name: string) {
    this.fishryService._name.next(name);
  }

}
