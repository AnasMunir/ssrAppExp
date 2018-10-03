import { Component, OnInit } from '@angular/core';
// import { FishryLibService } from 'fishry-lib';

@Component({
  selector: 'app-venom',
  templateUrl: './venom.component.html',
  styleUrls: ['./venom.component.css']
})
export class VenomComponent implements OnInit {
  name: string = '';
  constructor(/* public fishryService: FishryLibService */) { }

  ngOnInit() {
    // this.fishryService._name
    //   .subscribe((name: string) => this.name = name);
  }

  setName(name: string) {
    // this.fishryService._name.next(name);
  }
}
