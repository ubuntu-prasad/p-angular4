import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  // template: '<app-success-alert>Success: Success alert in green color</app-success-alert>',
  styleUrls: ['./success-alert.component.css']
  /* styles: [`
    app-success-alert {
      color: green;
      background-color: lightgreen;
    }
  `]*/
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
