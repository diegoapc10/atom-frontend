import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseLoginModel } from 'src/domain/models/response-login.model';
import { LoginUseCase } from 'src/domain/usecases/users/login.usecase';
import { UserSesionService } from '../../services/user-sesion/user-sesion.service';
import { validateResponse } from '../../helper/validations-general';

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
    private router: Router
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
    this.loginUseCase.execute({ correo: this.email.value as string,  password: this.clave.value as string })
    .subscribe({
      next: (res: ResponseLoginModel) => {
        if(validateResponse(res)){
          this.userSesionService.dataStorage(res);
          this.router.navigateByUrl('');;
        } else {
          alert(res.msg);
        }
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
}
