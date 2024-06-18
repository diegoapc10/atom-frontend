import { Observable } from "rxjs";
import { HttpClient} from '@angular/common/http';
import { UserModel } from "src/domain/models/user.model";
import { UserRepository } from "src/domain/repositories/user.repository";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserImplementationRepository extends UserRepository {

    urlAuthApi: string = environment.AuthApi;
    urlUsersApi: string = environment.UsersApi;

    constructor(private http: HttpClient){
        super();
    }

    login(params: { correo: string; password: string; }): Observable<object> {
        return this.http.post<any>(`${this.urlAuthApi}/login`, params);
    }
    register(params: { nombre: string; correo: string; password: string; }): Observable<object> {
        return this.http.post<any>(`${this.urlUsersApi}/users`, params);
    }
    getUser(id: string): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.urlUsersApi}/users`, { params: { id } });
    }
    getUserByEmail(email: string): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.urlUsersApi}/byEmail/`, { params: { email } });
    }
}