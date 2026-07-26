import { NgModule } from "@angular/core";
import { TransOptionsRoutingModule } from "./trans-options-routing.module";
import { TransOptionsPage } from "./trans-options.page";
import { CommonModule } from "@angular/common";
import { LucideAngularModule } from "lucide-angular";

@NgModule({
  imports:[LucideAngularModule, CommonModule, TransOptionsRoutingModule],
  declarations: [TransOptionsPage]
})

export class TransOptionsModule {}
