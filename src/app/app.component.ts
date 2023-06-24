/*
 * @license
 * Copyright Infosim GmbH & Co. KG
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  loading:boolean = false;

  isLoading(event:any) {
    this.loading = event
  }

  constructor() {}
}
