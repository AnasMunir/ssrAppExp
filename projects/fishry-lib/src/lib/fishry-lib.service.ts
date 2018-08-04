import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FishryLibService {

  public _name: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }
}
