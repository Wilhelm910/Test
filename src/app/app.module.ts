/*
 * @license
 * Copyright Infosim GmbH & Co. KG
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserApiService } from "./backend/user-api.service";
import { MatCardModule } from "@angular/material/card";
import { MatInput, MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { RenderUsersComponent } from './render-users/render-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { NetworkInterceptor } from './network.interceptor';
import { HttpClientModule } from  '@angular/common/http';
import { HTTP_INTERCEPTORS } from  '@angular/common/http';


@NgModule({
  declarations: [AppComponent, RenderUsersComponent],
  imports: [BrowserModule, HeaderComponent, BrowserAnimationsModule, MatToolbarModule, MatProgressSpinnerModule, MatButtonModule, HttpClientModule],
  providers: [UserApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
