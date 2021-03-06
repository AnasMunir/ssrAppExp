import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VaderComponent } from './vader/vader.component';

import { Routes, RouterModule } from '@angular/router';

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
