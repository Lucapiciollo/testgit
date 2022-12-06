import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../component/menu/menu.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [MenuComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule
  ],
  exports:[MenuComponent]
})
export class SharedModule { }
