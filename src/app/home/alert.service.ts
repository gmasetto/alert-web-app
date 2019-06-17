import { Injectable } from '@angular/core';
import { AlertsMessage } from './alert';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  url = "http://localhost:8080/alertas";
  urlTotalizers = "http://localhost:8080/alertas/totalizador";

  constructor(private _http: HttpClient) {
   }
  
  getAlerts(page, size) {
    let url = this.url + "?page=" + page + "&size=" + size;

    return this._http.get<AlertsMessage[]>(url);
  }

  getAlertsTotalizers() {    
    return this._http.get<Number>(this.urlTotalizers);
  }
}
