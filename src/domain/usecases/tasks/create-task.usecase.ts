import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { ResponseCreateTasksModel } from "src/domain/models/response-create-task.model";
import { ResponseEditTasksModel } from "src/domain/models/response-edit-task.model";
import { TaskModel } from "src/domain/models/task.model";
import { TaskRepository } from "src/domain/repositories/task.repository";

export class CreateTaskUseCase implements UseCase<{ task: TaskModel, token: string }, ResponseCreateTasksModel> {

    constructor(private taskRepository: TaskRepository){}

    execute(params: { task: TaskModel; token: string; }): Observable<ResponseCreateTasksModel> {
        return this.taskRepository.createTask(params);
    }

}