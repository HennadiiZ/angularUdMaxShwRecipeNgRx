import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../_modules/app-routing.module";
import { CommonModule } from "@angular/common";

import { AlertComponent } from "../shared/alert/alert.component";
import { LoaderComponent } from "../shared/loader/loader.component";
import { DropdownDirective } from "../_directives/dropdown.directive";
import { PlaceholderDirective } from "../_directives/placeholder.directive";

@NgModule({
  declarations: [
    LoaderComponent,
    AlertComponent,
    DropdownDirective,
    PlaceholderDirective
  ],
  imports: [
    // RouterModule.forChild(),
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    LoaderComponent,
    AlertComponent,
    DropdownDirective,
    PlaceholderDirective,

    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ]
})

export class SharedModule {}
