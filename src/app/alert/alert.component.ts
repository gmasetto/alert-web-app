import { Component, OnInit, ViewChild } from '@angular/core';
import { Alert } from './alert';

import { AlertService } from './alert.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    
  displayedColumns: string[] = ['Alerta', 'Comparar Valor', 'Tipo', 'Descrição'];
  dataSource: any;  
  
  alert: Alert;
  
  constructor(private alertService: AlertService, private toastr: ToastrService) { 
      this.alertService.getTypesAlerts().subscribe(result => { 
          this.dataSource = new MatTableDataSource<Alert>(result);
          this.dataSource.paginator = this.paginator;
      });
  }

  ngOnInit() {        
    this.dataSource = new MatTableDataSource();
    this.alert = new Alert();    
  }

  salvar() {
      this.alertService.saveAlert(this.alert).subscribe(res => {       
        this.toastr.success("Alerta criado com sucesso!");
      }, err => {
        this.toastr.error("Erro ao salvar alerta!");
      }
   );
  }
}
