import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhistleComponent } from './whistle.component';
import { WhistleRoutingModule } from './whistle-routing.module';



@NgModule({
  declarations: [WhistleComponent],
  imports: [
    WhistleRoutingModule,
    CommonModule
  ]
})
export class WhistleModule { }
