import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileLayoutComponent } from "./components/profile-layout/profile-layout.component";
import { ProfilePage } from "./profile.page";

@NgModule({
  declarations: [ProfileLayoutComponent, ProfilePage],
  imports: [CommonModule, ProfileRoutingModule]
})
export class ProfileModule{}
