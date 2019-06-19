import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertMessageService } from './alert-message.service';
import { AlertsMessage } from './alert-message';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  produto: string;
  pdv: string;
  alerts: AlertsMessage[];
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [5,10];

  displayedColumns: string[] = ['Ponto de Venda', 'Tipo', 'Produto', 'Margem', 'Descrição', 'Categoria'];
  dataSource: any;  

  constructor(private alertMessageService: AlertMessageService ) { 
    this.alertMessageService.getAlertsTotalizers().subscribe(count => {       
      this.alertMessageService.getAlerts(this.produto, this.pdv, this.pageIndex, count).subscribe(result => {
        this.dataSource = new MatTableDataSource<AlertsMessage>(result);
        this.dataSource.paginator = this.paginator;
      }); 
    });   
  }
  
  loadData(produto, pdv, pageIndex, pageSize) {    
      this.alertMessageService.getAlerts(produto, pdv, pageIndex, pageSize).subscribe(result => { 
        this.dataSource = new MatTableDataSource<AlertsMessage>(result);    
    });    
  }

  filter() {
    this.loadData(this.produto, this.pdv,this.pageIndex, this.pageSize);
  }

  onPageChange(e) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    
    this.loadData(this.produto, this.pdv,this.pageIndex, this.pageSize);
  }

  ngOnInit() {   
  }
}
