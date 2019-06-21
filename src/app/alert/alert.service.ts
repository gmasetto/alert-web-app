import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alert } from './alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  url = "http://localhost:8080/alertas/tipo-alerta";  
  urlTiposAlertas = "http://localhost:8080/alertas/tipos-alertas";

  constructor(private _http: HttpClient) { 
  }  

  saveAlert(alerta: Alert) {       
    return this._http.post<Alert>(this.url, alerta);
  }

  getTypesAlerts() {       
    return this._http.get<Alert[]>(this.urlTiposAlertas);
  }

  removerTypeAlert(alert: Alert){            
    return this._http.delete<Alert>(this.url + "?alerta=" + alert.alerta);
  }

}
