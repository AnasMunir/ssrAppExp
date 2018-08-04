import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FishryLibComponent } from '../fishry-lib.component';

const routes: Routes = [
  {
    path: '',
    component: FishryLibComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishryRoutesRoutingModule { }
