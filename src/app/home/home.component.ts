import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from './alert.service';
import { AlertsMessage } from './alert';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  alerts: AlertsMessage[];

  displayedColumns: string[] = ['Ponto de Venda', 'Tipo', 'Produto', 'Margem', 'Descrição', 'Categoria'];
  dataSource: any;  

  constructor(private alertService: AlertService ) { 
    console.log("console");
    this.alertService.getAlerts().subscribe(result => {
      // this.dataSource = result;
      this.dataSource = new MatTableDataSource<AlertsMessage>(result);
      this.dataSource.paginator = this.paginator;
    });    
  }
  
  ngOnInit() {   
    // this.dataSource.paginator = this.paginator; 
  }
}
