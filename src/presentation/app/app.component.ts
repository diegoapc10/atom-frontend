import { Component } from '@angular/core';
import { UserLoginUseCase } from 'src/domain/usecases/users/user-login.usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atom-frontend';

  constructor(private loginUseCase: UserLoginUseCase){}

  login(){
    this.loginUseCase.execute({ correo: 'diegoapc10.dp@gmail.com', password: '123456' })
    .subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
}
