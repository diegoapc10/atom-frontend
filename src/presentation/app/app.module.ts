import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataModule } from 'src/data/data.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuLateralComponent } from './shared/menu-lateral/menu-lateral.component';
import { InicioComponent } from './shared/inicio/inicio.component';
import {MatButtonModule} from '@angular/material/button';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeLayoutComponent,
    MenuLateralComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgxSpinnerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
