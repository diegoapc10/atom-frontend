import { Observable } from "rxjs";
import { ResponseGetTasksModel } from "../models/response-get-tasks.model";
import { TaskModel } from "../models/task.model";
import { ResponseEditTasksModel } from "../models/response-edit-task.model";
import { ResponseCreateTasksModel } from "../models/response-create-task.model";
import { ResponseDeleteTasksModel } from "../models/response-delete-task.model";

export abstract class TaskRepository {
    abstract getTasks(params: {usuarioRef: string, token: string}): Observable<ResponseGetTasksModel>;
    abstract editTask(params: { task: TaskModel, token: string }): Observable<ResponseEditTasksModel>;
    abstract createTask(params: { task: TaskModel, token: string }): Observable<ResponseCreateTasksModel>;
    abstract deleteTask(params: { id: string, token: string }): Observable<ResponseDeleteTasksModel>;
}