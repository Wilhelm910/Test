/*
 * @license
 * Copyright Infosim GmbH & Co. KG
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {UserApiService} from "./backend/user-api.service";
import {MatCardModule} from "@angular/material/card";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { RenderUsersComponent } from './render-users/render-users.component';


@NgModule({
  declarations: [AppComponent, RenderUsersComponent],
  imports: [BrowserModule, HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
