import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  // template: '<app-warning-alert>Error: Warning alert in red color</app-warning-alert>',
  // styleUrls: ['./warning-alert.component.css']
  styles: [`
    p {
      color: red;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
