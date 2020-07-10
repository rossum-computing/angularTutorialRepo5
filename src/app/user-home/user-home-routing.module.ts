import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { TemplateProfileComponent } from './template-profile/template-profile.component';
import { ReactiveProfileComponent } from './reactive-profile/reactive-profile.component';


const routes: Routes = [
  { path : "userhomepage", component: UserHomePageComponent},
  { path : "userorders", component:UserOrdersComponent},
  { path : "templateprofile",  component:TemplateProfileComponent},
  { path : "reactiveprofile", component:ReactiveProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRoutingModule { }
