import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";


export abstract class UserRepository {
    abstract login(params: { correo: string, password: string }): Observable<object>;
    abstract register(params: { nombre: string, correo: string, password: string }): Observable<object>;
    abstract getUser( id: string ): Observable<UserModel>;
    abstract getUserByEmail( email: string ): Observable<UserModel>;
}