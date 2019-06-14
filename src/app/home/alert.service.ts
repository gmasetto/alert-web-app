import { Injectable } from '@angular/core';
import { AlertsMessage } from './alert';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  url = "http://localhost:8080/alertas";

  constructor(private _http: HttpClient) {
   }
  
  getAlerts() {        
    return this._http.get<AlertsMessage[]>(this.url);
  }
}
