import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskModel } from 'src/domain/models/task.model';
import {MatDialog} from '@angular/material/dialog';
import { TareaFormComponent } from '../tarea-form/tarea-form.component';
import { EditTaskUseCase } from 'src/domain/usecases/tasks/edit-task.usecase';
import { UserSesionService } from '../../services/user-sesion/user-sesion.service';
import { ResponseEditTasksModel } from 'src/domain/models/response-edit-task.model';
import { DeleteTaskUseCase } from 'src/domain/usecases/tasks/delete-task-usecase';
import { ResponseDeleteTasksModel } from 'src/domain/models/response-delete-task.model';
import { SweetAlert2Service } from '../../services/sweet-alert-2/sweet-alert-2.service';
import { SpinnerService } from '../../services/spinner/spinner.service';


@Component({
  selector: 'app-tarea-table',
  templateUrl: './tarea-table.component.html',
  styleUrls: ['./tarea-table.component.css']
})
export class TareaTableComponent {

  readonly dialog = inject(MatDialog);

  @Output('taskEdited')taskEdited = new EventEmitter<boolean>();
  @Input() tasks: TaskModel[] = [];
  tableHeader: string[] = ['titulo','descripcion','fecha','estado','acciones'];

  constructor(
    private userSesionService: UserSesionService,
    private editTaskUseCase: EditTaskUseCase,
    private deleteTaskUseCase: DeleteTaskUseCase,
    private sweetAlert2Service: SweetAlert2Service,
    private spinnerService: SpinnerService
  ){}

  ngOnInit(){
    
  }

  openForm(params: TaskModel){
    const dialogRef = this.dialog.open(TareaFormComponent, {
      data: { nuevo: false, task: params }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == '')
        return;

      if(!result.nuevo)
        this.editTask(result.task)
    });
  }

  editTask(task: TaskModel){
    this.spinnerService.iniciarAnimacion();
    this.editTaskUseCase.execute({ task: task, token: this.userSesionService.getToken() as string })
    .subscribe({
      next: (res: ResponseEditTasksModel) => {
        if(res.status){
          this.spinnerService.finalizarAnimacion();
          this.sweetAlert2Service.mostrarMensajeSuccess('La tarea se modificó correctamente');
          this.taskEdited.emit(true);
        }
      },
      error: (err: any) => {
        this.spinnerService.finalizarAnimacion();
        console.log(err);
      }
    })
  }

  async deleteTask(task: TaskModel){
    await this.sweetAlert2Service.mostrarMensajeConfirmacion('Cuidado!', `¿Esta seguro que desea eliminar la tarea ${task.titulo}?`)
    .then(result => {
      if(result.isDismissed){
        return;
      }
      this.spinnerService.iniciarAnimacion();
      this.deleteTaskUseCase.execute({ id: task.id, token: this.userSesionService.getToken() as string })
      .subscribe({
        next: (res: ResponseDeleteTasksModel) => {
          if(res.status){
            this.spinnerService.finalizarAnimacion();
            this.sweetAlert2Service.mostrarMensajeSuccess('La tarea se eliminó correctamente');
            this.taskEdited.emit(true);
          }
        },
        error: (err: any) => {
          this.spinnerService.finalizarAnimacion();
          console.log(err);
        }
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

}
