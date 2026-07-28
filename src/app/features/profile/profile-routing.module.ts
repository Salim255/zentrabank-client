import { RouterModule, Routes } from "@angular/router";
import { ProfilePage } from "./profile.page";
import { NgModule } from "@angular/core";
import { ProfileLayoutComponent } from "./components/profile-layout/profile-layout.component";

const routes: Routes = [ {
    path: "",
    component: ProfilePage,
    children: [
      {
        path: "",
        component: ProfileLayoutComponent,
      }
    ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule{}
