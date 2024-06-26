import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinner: NgxSpinnerService) { }

  iniciarAnimacion(){
    this.spinner.show();
  }

  finalizarAnimacion(){
    this.spinner.hide();
  }
}
