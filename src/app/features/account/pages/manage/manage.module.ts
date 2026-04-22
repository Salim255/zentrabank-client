import { NgModule } from "@angular/core";
import { ManageRoutingModule } from "./manage-routing.module";
import { ManagePage } from "./manage.page";

@NgModule({
  imports: [ManageRoutingModule],
  declarations: [ManagePage]
})

export class ManageModule {}
