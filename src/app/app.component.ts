/*
 * @license
 * Copyright Infosim GmbH & Co. KG
 */
import { Component } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  loading$ = this.loader.loading$;

  constructor(public loader: LoadingService) {}
}
