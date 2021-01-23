import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from "./ui/main/main.component";
import {TextComponent} from "./ui/text/text.component";

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'text', component: TextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
