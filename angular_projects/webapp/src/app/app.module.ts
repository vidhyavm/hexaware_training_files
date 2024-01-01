import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}  from '@angular/forms'
import {HttpClientModule}  from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { DisplayallComponent } from './components/displayall/displayall.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddplayersComponent } from './components/addplayers/addplayers.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayallComponent,
    DashboardComponent,
    AddplayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
