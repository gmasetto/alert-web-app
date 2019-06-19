import { Injectable } from '@angular/core';
import { AlertsMessage } from './alert-message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  url = "http://localhost:8080/alertas";
  urlTotalizers = "http://localhost:8080/alertas/totalizador";

  constructor(private _http: HttpClient) {
   }
  
  getAlerts(produto, pdv, page, size) {
    let url = this.url + "?page=" + page + "&size=" + size ;

    if (produto) {
        url = url + "&produto=" + produto;
    } 

    if (pdv) {
        url = url + "&pdv=" + pdv;
    }

    return this._http.get<AlertsMessage[]>(url);
  }

  getAlertsTotalizers() {    
    return this._http.get<Number>(this.urlTotalizers);
  }
}
