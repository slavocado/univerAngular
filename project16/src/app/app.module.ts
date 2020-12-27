import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from "@angular/common/http";

import { MatSliderModule} from "@angular/material/slider";
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddWorkerComponent } from './ui/add-worker/add-worker.component';
import {AddWorkerDialog} from "./ui/add-worker/add-worker.component";

@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    AddWorkerComponent,
    AddWorkerDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
