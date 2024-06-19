import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { ResponseEditTasksModel } from "src/domain/models/response-edit-task.model";
import { TaskModel } from "src/domain/models/task.model";
import { TaskRepository } from "src/domain/repositories/task.repository";

export class EditTaskUseCase implements UseCase<{ task: TaskModel, token: string }, ResponseEditTasksModel> {

    constructor(private taskRepository: TaskRepository){}

    execute(params: { task: TaskModel; token: string; }): Observable<ResponseEditTasksModel> {
        return this.taskRepository.editTask(params);
    }

}