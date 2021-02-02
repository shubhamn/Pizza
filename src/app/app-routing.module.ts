import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderpizzaComponent } from './orderpizza/orderpizza.component';
import { BuildpizzaComponent } from './buildpizza/buildpizza.component';
import {BookingComponent } from './booking.component'
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [{path:'',component:LoginComponent},{path:'home/:name',component:HomeComponent},{path:'home',component:HomeComponent},
{path:'order',component:OrderpizzaComponent},{path:'register',component:RegisterComponent},
{path:'build',component:BuildpizzaComponent},{path:'book',component:BookingComponent},{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
