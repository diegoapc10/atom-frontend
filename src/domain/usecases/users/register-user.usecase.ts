import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { ResponseRegisterUserModel } from "src/domain/models/response-register-user.model";
import { UserRepository } from "src/domain/repositories/user.repository";

export class RegisterUserUseCase implements UseCase< { nombre: string, correo: string, password: string }, ResponseRegisterUserModel > {

    constructor(private userRepoository: UserRepository){}

    execute(params: { nombre: string; correo: string; password: string; }): Observable<ResponseRegisterUserModel> {
        return this.userRepoository.registerUser(params);
    }

    
}