import { NgModule } from "@angular/core";
import { ManageRoutingModule } from "./manage-routing.module";
import { ManagePage } from "./manage.page";
import { SharedModule } from "../../../../shared/shared.module";

@NgModule({
  imports: [SharedModule, ManageRoutingModule],
  declarations: [ManagePage]
})

export class ManageModule {}
