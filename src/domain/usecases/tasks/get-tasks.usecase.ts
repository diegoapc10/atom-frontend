import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { ResponseGetTasksModel } from "src/domain/models/response-get-tasks.model";
import { TaskRepository } from "src/domain/repositories/task.repository";

export class GetTasksUseCase implements UseCase< { usuarioRef: string, token: string }, ResponseGetTasksModel > {

    constructor(private taskRepository: TaskRepository){}

    execute(params: { usuarioRef: string, token: string }): Observable<ResponseGetTasksModel> {
        return this.taskRepository.getTasks(params);
    }

}