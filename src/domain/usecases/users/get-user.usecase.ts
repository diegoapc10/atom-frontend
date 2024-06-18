import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { ResponseGetUserModel } from "src/domain/models/response-get-user.model";
import { UserRepository } from "src/domain/repositories/user.repository";

export class GetUserUseCase implements UseCase< string, ResponseGetUserModel > {

    constructor(private userRepoository: UserRepository){}
    
    execute(params: string): Observable<ResponseGetUserModel> {
        return this.userRepoository.getUser(params);
    }
    
}