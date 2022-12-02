import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormativaComponent } from './normativa.component';
import { NormativaRoutingModule } from './normativa-routing.module';



@NgModule({
  declarations: [NormativaComponent],
  imports: [
    NormativaRoutingModule,
    CommonModule
  ]
})
export class NormativaModule { }
