import { Component } from '@angular/core';
import { UserModel } from 'src/domain/models/user.model';
import { UserSesionService } from '../../services/user-sesion/user-sesion.service';
import { Router } from '@angular/router';
import { SpinnerService } from '../../services/spinner/spinner.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {

  user: any;

  constructor(
    private userSesionService: UserSesionService,
    private _router: Router,
    private spinnerService: SpinnerService
    ){}

    ngOnInit(){
      this.user = this.userSesionService.getUserLogin() as UserModel;
    }

    logOut(){
      this.spinnerService.iniciarAnimacion();
      this.userSesionService.removeDataStorage();
      this.spinnerService.finalizarAnimacion();
      this._router.navigateByUrl('login');
    }
}
