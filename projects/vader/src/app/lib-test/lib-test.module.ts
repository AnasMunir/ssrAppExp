import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FishryLibModule } from 'fishry-lib';
import { LibTestComponent } from './lib-test.component';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   {
//       path: '',
//       component: LibTestComponent
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FishryLibModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [LibTestComponent]
})
export class LibTestModule { }
