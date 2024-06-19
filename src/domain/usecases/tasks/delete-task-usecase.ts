import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { ResponseDeleteTasksModel } from "src/domain/models/response-delete-task.model";
import { TaskRepository } from "src/domain/repositories/task.repository";

export class DeleteTaskUseCase implements UseCase<{ id: string, token: string }, ResponseDeleteTasksModel> {

    constructor(private taskRepository: TaskRepository){}

    execute(params: { id: string; token: string; }): Observable<ResponseDeleteTasksModel> {
        return this.taskRepository.deleteTask(params);
    }

}