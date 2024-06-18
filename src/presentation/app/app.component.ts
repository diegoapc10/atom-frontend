import { Component } from '@angular/core';
import { GetUserByEmailUseCase } from 'src/domain/usecases/users/get-user-by-email.usecase';
import { GetUserUseCase } from 'src/domain/usecases/users/get-user.usecase';
import { LoginUseCase } from 'src/domain/usecases/users/login.usecase';
import { RegisterUserUseCase } from 'src/domain/usecases/users/register-user.usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atom-frontend';

  constructor(
    
  ){}

  

}
