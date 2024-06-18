import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataModule } from 'src/data/data.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { MenuLateralComponent } from './shared/menu-lateral/menu-lateral.component';
import { InicioComponent } from './shared/inicio/inicio.component';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
