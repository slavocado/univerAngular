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
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {TextMaskModule} from "angular2-text-mask";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {EditWorkerComponent, EditWorkerDialog} from './ui/table-workers/edit-worker/edit-worker.component';
import {MatSortModule} from "@angular/material/sort";
import { TextComponent } from './ui/text/text.component';
import { MainComponent } from './ui/main/main.component';
import {AppRoutingModule} from "./app-routing.module";
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    AddWorkerComponent,
    AddWorkerDialog,
    EditWorkerComponent,
    EditWorkerDialog,
    TextComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    TextMaskModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    AppRoutingModule,
    MatButtonToggleModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
