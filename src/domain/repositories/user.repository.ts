import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";
import { ResponseRegisterUserModel } from "../models/response-register-user.model";
import { ResponseLoginModel } from "../models/response-login.model";
import { ResponseGetUserModel } from "../models/response-get-user.model";


export abstract class UserRepository {
    abstract login(params: { correo: string, password: string }): Observable<ResponseLoginModel>;
    abstract registerUser(params: { nombre: string, correo: string, password: string }): Observable<ResponseRegisterUserModel>;
    abstract getUser( id: string ): Observable<ResponseGetUserModel>;
    abstract getUserByEmail( email: string ): Observable<ResponseGetUserModel>;
}