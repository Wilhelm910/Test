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
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [AppComponent, RenderUsersComponent, SearchComponent, EditUserComponent],
  imports: [
    BrowserModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    HeaderComponent,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    HttpClientModule],
  providers: [UserApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
