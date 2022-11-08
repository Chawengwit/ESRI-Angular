import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { CommentComponent } from './assignment1/comment/comment.component';


import { Assignment3Component } from './assignment3/assignment3.component';


import { ButtonModule } from 'primeng/button';

import { Assignment4Component } from './assignment4/assignment4.component';
import { LocationComponent } from './assignment4/location/location.component';

import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { MapgisComponent } from './assignment4/mapgis/mapgis.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    CommentComponent,
    Assignment3Component,
    Assignment4Component,
    LocationComponent,
    MapgisComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
