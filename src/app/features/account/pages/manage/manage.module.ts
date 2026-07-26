import { NgModule } from "@angular/core";
import { ManageRoutingModule } from "./manage-routing.module";
import { ManagePage } from "./manage.page";
import { SharedModule } from "../../../../shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule ,SharedModule, ManageRoutingModule],
  declarations: [ManagePage]
})

export class ManageModule {}
