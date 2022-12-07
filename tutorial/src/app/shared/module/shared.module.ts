import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../component/menu/menu.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
  declarations: [MenuComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports:[MenuComponent]
})
export class SharedModule { }
