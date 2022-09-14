import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConstructionMachinesComponent} from "./components/construction-machines/construction-machines.component";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {ToggleButtonModule} from "primeng/togglebutton";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";

@NgModule({
  declarations: [
    AppComponent,
    ConstructionMachinesComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        TableModule,
        InputTextModule,
        ToggleButtonModule,
        FormsModule,
        DropdownModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
