import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VaderComponent } from './vader/vader.component';
import { AppRoutingModule } from './app-routing.module';
import { FishryLibModule } from 'fishry-lib';
// import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
    VaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    // FishryLibModule
    // CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
