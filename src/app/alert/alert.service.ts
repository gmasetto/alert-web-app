import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alert } from './alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  url = "http://localhost:8080/alertas/tipo-alerta";

  constructor(private _http: HttpClient) { 
  }  

  saveAlert(alerta: Alert) {       
    return this._http.post<Alert>(this.url, alerta);
  }

}
