import { Injectable } from '@angular/core';
import Cookies from 'js-cookie';
import { ResponseLoginModel } from 'src/domain/models/response-login.model';
import { UserModel } from 'src/domain/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserSesionService {

  constructor() { }

  dataStorage(data: ResponseLoginModel){
    let expireJs = new Date().setHours(new Date().getHours() + 0);
    Cookies.set('user_token',data.token, { expires: expireJs });
    localStorage.setItem('usuario', JSON.stringify(data.usuario));
  }

  userLogOn(){
    let user_token = Cookies.get('user_token') ?? '';
    let user = localStorage.getItem('usuario') ?? '';

    if(user_token == '' || user == '')
      return false

    return true;
  }

  getUserLogin(){
    let user: any;
    let jsonUser = localStorage.getItem('usuario');
    if(jsonUser !== null && jsonUser != '')
      user = JSON.parse(jsonUser);
    return user;
  }

  removeDataStorage(){
    Cookies.remove('user_token');
    localStorage.clear();
  }
}
