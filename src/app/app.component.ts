import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config = {
    title: 'Alert Web App',
    sidenav: [
      { path: '/home', label: 'Home' }
    ]
  };
}
