import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhistleComponent } from './whistle.component';

const routes: Routes = [{
  path: "",
  component: WhistleComponent,
  canActivate: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhistleRoutingModule { }
