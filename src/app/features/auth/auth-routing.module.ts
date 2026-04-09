import { Route, RouterModule } from "@angular/router";
import { Auth } from "./auth";
import { NgModule } from "@angular/core";
import { LoginPage } from "./pages/login/login.page";

const routes: Route[] = [
  {
    path: '',
    component: Auth,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginPage
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
