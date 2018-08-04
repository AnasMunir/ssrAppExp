import { Component, OnInit } from '@angular/core';
import { FishryLibService } from 'fishry-lib';
// import { GlobalService } from 'fishry-lib/lib/global.service';

@Component({
  selector: 'app-vader',
  templateUrl: './vader.component.html',
  styleUrls: ['./vader.component.css']
})
export class VaderComponent implements OnInit {
  name: string = '';
  constructor(public fishryService: FishryLibService
  ) { }

  ngOnInit() {
    this.fishryService._name
      .subscribe((name: string) => this.name = name);
  }

  setName(name: string) {
    this.fishryService._name.next(name);
  }

}
