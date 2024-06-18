import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserSesionService } from '../services/user-sesion/user-sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userSesionService: UserSesionService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userLogOn = this.userSesionService.userLogOn();

      if(!userLogOn){
        this.userSesionService.removeDataStorage();
        this.router.navigateByUrl('login');
        return false;
      }

    return true;
  }
  
}
