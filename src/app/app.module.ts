import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RopaListComponent } from './ropa-list/ropa-list.component';
import { RopaCartComponent } from './ropa-cart/ropa-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    RopaListComponent,
    RopaCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
