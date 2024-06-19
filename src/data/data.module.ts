import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { UserRepository } from "src/domain/repositories/user.repository";
import { LoginUseCase } from "src/domain/usecases/users/login.usecase";
import { UserImplementationRepository } from "./repositories/user/user-implementation.repository";
import { RegisterUserUseCase } from "src/domain/usecases/users/register-user.usecase";
import { GetUserUseCase } from "src/domain/usecases/users/get-user.usecase";
import { GetUserByEmailUseCase } from "src/domain/usecases/users/get-user-by-email.usecase";
import { TaskRepository } from "src/domain/repositories/task.repository";
import { GetTasksUseCase } from "src/domain/usecases/tasks/get-tasks.usecase";
import { TaskImplementationRepository } from "./repositories/task/task-implementation.repository";
import { EditTaskUseCase } from "src/domain/usecases/tasks/edit-task.usecase";
import { CreateTaskUseCase } from "src/domain/usecases/tasks/create-task.usecase";
import { DeleteTaskUseCase } from "src/domain/usecases/tasks/delete-task-usecase";


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

const getTasksUseCaseFactory = (taskRepo: TaskRepository) => new GetTasksUseCase(taskRepo);
export const getTasksUseCaseProvider = {
    provide: GetTasksUseCase,
    useFactory: getTasksUseCaseFactory,
    deps: [TaskRepository]
}

const editTaskUseCaseFactory = (taskRepo: TaskRepository) => new EditTaskUseCase(taskRepo);
export const editTaskUseCaseProvider = {
    provide: EditTaskUseCase,
    useFactory: editTaskUseCaseFactory,
    deps: [TaskRepository]
}

const createTaskUseCaseFactory = (taskRepo: TaskRepository) => new CreateTaskUseCase(taskRepo);
export const createTaskUseCaseProvider = {
    provide: CreateTaskUseCase,
    useFactory: createTaskUseCaseFactory,
    deps: [TaskRepository]
}

const deleteTaskUseCaseFactory = (taskRepo: TaskRepository) => new DeleteTaskUseCase(taskRepo);
export const deleteTaskUseCaseProvider = {
    provide: DeleteTaskUseCase,
    useFactory: deleteTaskUseCaseFactory,
    deps: [TaskRepository]
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
        },
        getTasksUseCaseProvider,
        editTaskUseCaseProvider,
        createTaskUseCaseProvider,
        deleteTaskUseCaseProvider,
        {
            provide: TaskRepository,
            useClass: TaskImplementationRepository
        }
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class DataModule {  }