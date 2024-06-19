import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseCreateTasksModel } from "src/domain/models/response-create-task.model";
import { ResponseDeleteTasksModel } from "src/domain/models/response-delete-task.model";
import { ResponseEditTasksModel } from "src/domain/models/response-edit-task.model";
import { ResponseGetTasksModel } from "src/domain/models/response-get-tasks.model";
import { TaskModel } from "src/domain/models/task.model";
import { TaskRepository } from "src/domain/repositories/task.repository";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class TaskImplementationRepository extends TaskRepository {
    
    urlTaskApi: string = environment.TasksApi;

    constructor(private http: HttpClient){
        super();
    }

    getTasks(params: {usuarioRef: string, token: string}): Observable<ResponseGetTasksModel> {
        let headers = { 'Authorization': `Bearer ${params.token}` };
        return this.http.get<ResponseGetTasksModel>(`${this.urlTaskApi}/${params.usuarioRef}`, { headers: headers });
    }

    editTask(params: { task: TaskModel, token: string }): Observable<ResponseEditTasksModel> {
        let headers = { 'Authorization': `Bearer ${params.token}` };
        const modifiedTask = {
            titulo: params.task.titulo,
            descripcion: params.task.descripcion
        }
        return this.http.put<ResponseEditTasksModel>(`${this.urlTaskApi}/${params.task.id}`, modifiedTask, { headers: headers });
    }

    createTask(params: { task: TaskModel; token: string; }): Observable<ResponseCreateTasksModel> {
        let headers = { 'Authorization': `Bearer ${params.token}` };
        const createdTask = {
            titulo: params.task.titulo,
            descripcion: params.task.descripcion,
            usuario_ref: params.task.usuarioRef
        }
        return this.http.post<ResponseCreateTasksModel>(`${this.urlTaskApi}`, createdTask, { headers: headers });
    }

    deleteTask(params: { id: string; token: string; }): Observable<ResponseDeleteTasksModel> {
        let headers = { 'Authorization': `Bearer ${params.token}` };
        return this.http.delete<ResponseGetTasksModel>(`${this.urlTaskApi}/${params.id}`, { headers: headers });
    }

}