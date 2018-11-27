import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
  <h1>{{title}}</h1>
  <app-customers></app-customers>`
})

export class AppComponent implements OnInit {
  title;
  constructor() { }
  ngOnInit() {
    this.title = 'Hello World'
  }
}
