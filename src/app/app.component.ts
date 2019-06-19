import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config = {
    title: 'Alertas',
    sidenav: [
      { path: '/home', label: 'Principal' },
      { path: '/alert', label: 'Criar Alerta' }
    ]
  };
}
