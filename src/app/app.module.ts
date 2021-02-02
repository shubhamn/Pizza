import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderpizzaComponent } from './orderpizza/orderpizza.component';
import { BuildpizzaComponent } from './buildpizza/buildpizza.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatMenuModule,MatIconModule,MatGridListModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import {HttpClientModule}  from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {BookingComponent } from './booking.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderpizzaComponent,
    BuildpizzaComponent,BookingComponent, NavbarComponent,LoginComponent,RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MDBBootstrapModule.forRoot(),MatMenuModule,MatIconModule,BrowserAnimationsModule,MaterialModule,
    MatToolbarModule,MatGridListModule,FlexLayoutModule,MatCardModule,HttpClientModule,MatTableModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
