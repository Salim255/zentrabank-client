import { RouterModule, Routes } from "@angular/router";
import { AccountPage } from "./account.page";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: AccountPage,
    children: [
      {
        path: "",
        pathMatch:"full",
        redirectTo: "details"
      },
      {
        path: "details",
        loadChildren: () => import("./pages/details/details.module").then((m) =>m.DetailsModule)
      },
      {
        path: "history",
        loadChildren: () => import("./pages/history/history.module").then((m) => m.HistoryModule)
      },
      {
        path: "manage",
        loadChildren: () => import("./pages/manage/manage.module").then((m) =>m.ManageModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountRoutingModule {}
