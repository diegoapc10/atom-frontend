import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent {
  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {nuevo: boolean, task: any}
  ) {
    
   }
   
   taskForm = this.formBuilder.group({
    id: [this.data.nuevo ? '' : this.data.task.id],
    titulo: [this.data.nuevo ? '' : this.data.task.titulo,[Validators.required]],
    descripcion: [this.data.nuevo ? '' : this.data.task.descripcion,[Validators.required]],
    estado: [this.data.nuevo ? false : this.data.task.estado,[Validators.required]]
   });
   
   onBlurTitulo(event: any){
    this.data.task.titulo = event.target.value;
   }

   onBlurDescripcion(event: any){
    this.data.task.descripcion = event.target.value;
   }

   onChangeRadioButtom(event: any){
    this.data.task.estado = event.value;
   }

   get titulo(){
    return this.taskForm.controls['titulo'].value
   }

   get descripcion(){
    return this.taskForm.controls['descripcion'].value
   }
}
