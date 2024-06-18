import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { UserModel as string } from "src/domain/models/user.model";
import { UserRepository } from "src/domain/repositories/user.repository";

export class UserLoginUseCase implements UseCase< { correo: string, password: string }, object > {
    
    constructor(private userRepoository: UserRepository){}
    
    execute(params: { correo: string; password: string; }): Observable<object> {
        return this.userRepoository.login(params);
    }

}