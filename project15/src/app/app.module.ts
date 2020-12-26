import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './ui/modal/modal.component';
import {TextMaskModule} from "angular2-text-mask";
import {HttpClientModule} from "@angular/common/http";
import { MyfilterPipe } from './shared/pipes/myfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    AddformWorkerComponent,
    ModalComponent,
    MyfilterPipe,
  ],
  imports: [
    BrowserModule, FormsModule, NgbModule, ReactiveFormsModule, TextMaskModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
