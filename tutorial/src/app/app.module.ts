import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/module/shared.module';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './shared/component/menu/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatCardModule,
  ],
  exports: [CardComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
