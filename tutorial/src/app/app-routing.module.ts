import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: "page/home",
  loadChildren: () => import('../app/page/home/home.module').then(module => module.HomeModule),
},{
  path: "page/whistle",
  loadChildren: () => import('../app/page/whistle/whistle.module').then(module => module.WhistleModule),
},{
  path: "page/normativa",
  loadChildren: () => import('../app/page/normativa/normativa.module').then(module => module.NormativaModule),
},{
  path: "page/faq",
  loadChildren: () => import('../app/page/faq/faq.module').then(module => module.FaqModule),
},{
  path: "page/login",
  loadChildren: () => import('../app/page/login/login.module').then(module => module.LoginModule),
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
