import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { ResponseLoginModel } from "src/domain/models/response-login.model";
import { UserModel as string } from "src/domain/models/user.model";
import { UserRepository } from "src/domain/repositories/user.repository";

export class LoginUseCase implements UseCase< { correo: string, password: string }, ResponseLoginModel > {
    
    constructor(private userRepoository: UserRepository){}
    
    execute(params: { correo: string; password: string; }): Observable<ResponseLoginModel> {
        return this.userRepoository.login(params);
    }

}