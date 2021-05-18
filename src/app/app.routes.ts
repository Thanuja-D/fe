import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TableviewComponent} from './tableview/tableview.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path:'tableview',component:TableviewComponent},
  {path:'userprofile',component:ProfileComponent},
  {path:'home',component:HomeComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
