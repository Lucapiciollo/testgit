import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../component/menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[MenuComponent]
})
export class SharedModule { }
