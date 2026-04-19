import { NgModule } from "@angular/core";
import { ApplicationRoutingModule } from "./application-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ApplicationPage } from "./application.page";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    ApplicationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ],
  declarations: [ApplicationPage],
})

export class ApplicationModule {}
