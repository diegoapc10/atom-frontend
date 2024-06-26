import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseLoginModel } from 'src/domain/models/response-login.model';
import { LoginUseCase } from 'src/domain/usecases/users/login.usecase';
import { UserSesionService } from '../../services/user-sesion/user-sesion.service';
import { validateResponse } from '../../helper/validations-general';
import { SpinnerService } from '../../services/spinner/spinner.service';
import { SweetAlert2Service } from '../../services/sweet-alert-2/sweet-alert-2.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder,
    private loginUseCase: LoginUseCase,
    private userSesionService: UserSesionService,
    private router: Router,
    private spinnerService: SpinnerService,
    private sweetAlert2Service: SweetAlert2Service
  ){}

  loginForm = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    clave: ['',[Validators.required]]
  });

  get email(){
    return this.loginForm.controls['email'];
  }

  get clave(){
    return this.loginForm.controls['clave'];
  }

  login(){
    this.spinnerService.iniciarAnimacion();
    this.loginUseCase.execute({ correo: this.email.value as string,  password: this.clave.value as string })
    .subscribe({
      next: (res: ResponseLoginModel) => {
        if(validateResponse(res)){
          this.userSesionService.dataStorage(res);
          this.spinnerService.finalizarAnimacion();
          this.router.navigateByUrl('');;
        }
      },
      error: (err: any) => {
        this.spinnerService.finalizarAnimacion();
        console.log(err);
        this.sweetAlert2Service.mostrarMensajeError(err.msg);
      }
    })
  }
}
