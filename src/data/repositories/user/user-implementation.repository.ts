import { Observable } from "rxjs";
import { HttpClient} from '@angular/common/http';
import { UserRepository } from "src/domain/repositories/user.repository";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { ResponseRegisterUserModel } from "src/domain/models/response-register-user.model";
import { ResponseLoginModel } from "src/domain/models/response-login.model";
import { ResponseGetUserModel } from "src/domain/models/response-get-user.model";

@Injectable({
    providedIn: 'root'
})
export class UserImplementationRepository extends UserRepository {

    urlAuthApi: string = environment.AuthApi;
    urlUsersApi: string = environment.UsersApi;

    constructor(private http: HttpClient){
        super();
    }

    login(params: { correo: string; password: string; }): Observable<ResponseLoginModel> {
        return this.http.post<any>(`${this.urlAuthApi}/login`, params);
    }
    registerUser(params: { nombre: string; correo: string; password: string; }): Observable<ResponseRegisterUserModel> {
        return this.http.post<any>(`${this.urlUsersApi}`, params);
    }
    getUser(id: string): Observable<ResponseGetUserModel> {
        return this.http.get<ResponseGetUserModel>(`${this.urlUsersApi}/${id}`);
    }
    getUserByEmail(email: string): Observable<ResponseGetUserModel> {
        return this.http.get<ResponseGetUserModel>(`${this.urlUsersApi}/byEmail/${email}`);
    }
}