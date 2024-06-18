import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { UserRepository } from "src/domain/repositories/user.repository";
import { LoginUseCase } from "src/domain/usecases/users/login.usecase";
import { UserImplementationRepository } from "./repositories/user/user-implementation.repository";
import { RegisterUserUseCase } from "src/domain/usecases/users/register-user.usecase";
import { GetUserUseCase } from "src/domain/usecases/users/get-user.usecase";
import { GetUserByEmailUseCase } from "src/domain/usecases/users/get-user-by-email.usecase";


const loginUseCaseFactory = (userRepo: UserRepository) => new LoginUseCase(userRepo);
export const loginUseCaseProvider = {
    provide: LoginUseCase,
    useFactory: loginUseCaseFactory,
    deps: [UserRepository]
};

const registerUserUseCaseFactory = (userRepo: UserRepository) => new RegisterUserUseCase(userRepo);
export const registerUserUseCaseProvider = {
    provide: RegisterUserUseCase,
    useFactory: registerUserUseCaseFactory,
    deps: [UserRepository]
}

const getUserUseCaseFactory = (userRepo: UserRepository) => new GetUserUseCase(userRepo);
export const getUserUseCaseProvider = {
    provide: GetUserUseCase,
    useFactory: getUserUseCaseFactory,
    deps: [UserRepository]
}

const getUserByEmailUseCaseFactory = (userRepo: UserRepository) => new GetUserByEmailUseCase(userRepo);
export const getUserByEmailUseCaseProvider = {
    provide: GetUserByEmailUseCase,
    useFactory: getUserByEmailUseCaseFactory,
    deps: [UserRepository]
}

@NgModule({
    providers: [
        loginUseCaseProvider,
        registerUserUseCaseProvider,
        getUserUseCaseProvider,
        getUserByEmailUseCaseProvider,
        {
            provide: UserRepository,
            useClass: UserImplementationRepository
        }
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class DataModule {  }