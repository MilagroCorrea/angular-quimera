import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RopaListComponent } from './ropa-list/ropa-list.component';
import { RopaCartComponent } from './ropa-cart/ropa-cart.component';
import { FormsModule } from '@angular/forms';
import { QuimeraAboutComponent } from './quimera-about/quimera-about.component';
import { QuimeraItemsComponent } from './quimera-items/quimera-items.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    RopaListComponent,
    RopaCartComponent,
    QuimeraAboutComponent,
    QuimeraItemsComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
