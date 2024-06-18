import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareaRoutingModule } from './tarea-routing.module';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    TareaRoutingModule
  ]
})
export class TareaModule { }
