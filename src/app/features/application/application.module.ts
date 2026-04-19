import { NgModule } from "@angular/core";
import { ApplicationRoutingModule } from "./application-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    ApplicationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedWorker
  ]
})

export class ApplicationModule {}
