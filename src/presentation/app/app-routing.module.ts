import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { InicioComponent } from './shared/inicio/inicio.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', component: InicioComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'tareas', loadChildren: () => import('./tarea/tarea.module').then(t => t.TareaModule)
      }
    ]
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
