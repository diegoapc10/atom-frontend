import { Component, inject } from '@angular/core';
import { UserSesionService } from '../../services/user-sesion/user-sesion.service';
import { UserModel } from 'src/domain/models/user.model';
import { GetTasksUseCase } from '../../../../domain/usecases/tasks/get-tasks.usecase';
import { ResponseGetTasksModel } from 'src/domain/models/response-get-tasks.model';
import { validateResponse } from '../../helper/validations-general';
import { TaskModel } from 'src/domain/models/task.model';
import {MatDialog} from '@angular/material/dialog';
import { TareaFormComponent } from '../tarea-form/tarea-form.component';
import { CreateTaskUseCase } from 'src/domain/usecases/tasks/create-task.usecase';
import { ResponseCreateTasksModel } from 'src/domain/models/response-create-task.model';
import { SpinnerService } from '../../services/spinner/spinner.service';
import { SweetAlert2Service } from '../../services/sweet-alert-2/sweet-alert-2.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  readonly dialog = inject(MatDialog);
  user: any;
  tasks: TaskModel[] = [];

  constructor(
    private userSesionService: UserSesionService,
    private getTasksUseCase: GetTasksUseCase,
    private createTaskUseCase: CreateTaskUseCase,
    private spinnerService: SpinnerService,
    private sweetAlert2Service: SweetAlert2Service
  ){}

  ngOnInit(){
    this.user = this.userSesionService.getUserLogin() as UserModel;
    this.getTasks(this.user.id);
  }

   getTasks(idUser: string){
    this.spinnerService.iniciarAnimacion();
    const params = { usuarioRef: idUser, token: this.userSesionService.getToken() as string };
    this.getTasksUseCase.execute(params).subscribe({
      next: (res: ResponseGetTasksModel) => {
        if(validateResponse(res)){
          this.tasks = res.tareas;
        }
        this.spinnerService.finalizarAnimacion();
      },
      error: (err: any) => {
        this.spinnerService.finalizarAnimacion();
        console.log(err);
        this.sweetAlert2Service.mostrarMensajeError(err.msg);
      }
    })
  }
  
  openForm(){
    const dialogRef = this.dialog.open(TareaFormComponent, {
      data: { 
        nuevo: true, 
        task: { 
          id: '',
          titulo: '',
          descripcion: '',
          fecha: new Date(),
          usuarioRef: this.user.id
       }}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.nuevo){
        this.newTask(result.task)
      }
    });
  }

  refreshTask(result: boolean){
    if(result)
      this.getTasks(this.user.id);
  }

  newTask(task: TaskModel){
    this.spinnerService.iniciarAnimacion();
    this.createTaskUseCase.execute({ task: task, token: this.userSesionService.getToken() as string })
    .subscribe({
      next: (res: ResponseCreateTasksModel) => {
        if(res.status){
          this.spinnerService.finalizarAnimacion();
          this.sweetAlert2Service.mostrarMensajeSuccess('La tarea se registro correctamente');
          this.getTasks(this.user.id);
        }
      },
      error: (err: any) => {
        this.spinnerService.finalizarAnimacion();
        console.log(err);
        this.sweetAlert2Service.mostrarMensajeError(err.msg);
      }
    });
  }

}
