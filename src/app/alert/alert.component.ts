import { Component, OnInit } from '@angular/core';
import { Alert } from './alert';

import { AlertService } from './alert.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  alert: Alert;
  
  constructor(private alertService: AlertService, private toastr: ToastrService) { 
  }

  ngOnInit() {
    this.alert = new Alert();    
  }

  salvar() {
      this.alertService.saveAlert(this.alert).subscribe(res => {       
        console.log(res);
        this.toastr.success("Alerta criado com sucesso!");
      }, err => {
        this.toastr.error("Erro ao salvar alerta!");
        console.log(err);
      }
   );
  }
}
