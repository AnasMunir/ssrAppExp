import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VaderComponent } from './vader/vader.component';
import { CartModule } from "./cart/cart.module";

import { Routes, RouterModule } from '@angular/router';
import { FishryLibModule } from 'fishry-lib';
// import { LibTestModule } from './lib-test/lib-test.module';
const routes: Routes = [
    {
        path: 'fishry',
        // loadChildren: () => '../../../../node_modules/fishry-lib/'
        // loadChildren: () => LibTestModule
        loadChildren: './lib-test/lib-test.module#LibTestModule'
    },
    {
        path: '',
        component: VaderComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
