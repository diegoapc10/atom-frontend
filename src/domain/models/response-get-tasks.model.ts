import { TaskModel } from "./task.model";

export interface ResponseGetTasksModel {
    status: boolean;
    tareas:TaskModel[]
    msg: string;
}