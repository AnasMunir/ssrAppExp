import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FishryLibModule } from 'fishry-lib';
import { LibTestComponent } from './lib-test.component';

@NgModule({
  imports: [
    CommonModule,
    // FishryLibModule
  ],
  declarations: [LibTestComponent]
})
export class LibTestModule { }
