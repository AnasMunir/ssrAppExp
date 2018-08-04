import { NgModule } from '@angular/core';
import { FishryLibComponent } from './fishry-lib.component';
import { FishryRoutesRoutingModule } from './fishry-routes/fishry-routes-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: FishryLibComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FishryRoutesRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FishryLibComponent],
  exports: [RouterModule]
})
export class FishryLibModule { }
