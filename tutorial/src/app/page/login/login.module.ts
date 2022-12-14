import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    CommonModule,
    SharedModule,
    MatButtonModule
  ]
})
export class LoginModule { }
