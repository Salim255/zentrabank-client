import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";


export type HeaderButtonVariant =
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger";



export interface HeaderNavItem {

    label: string;

    route: string;

}



export interface HeaderAction {

    label: string;

    variant: HeaderButtonVariant;

    type?:
        | "button"
        | "submit"
        | "reset";

}



@Component({

    selector: "app-header",

    templateUrl:
        "./header.component.html",

    styleUrls:
        ["./header.component.scss"],

    standalone: false

})
export class HeaderComponent {


    constructor(private router: Router){}
    @Input()

    navigation: HeaderNavItem[] = [];



    @Input()
    actions: HeaderAction[] = [];



    @Input()
    logoSrc =
        "/icons/logo-1.png";



    @Input()
    brandName =
        "Zentra";



    @Input()
    brandAccent =
        "Bank";



    @Input()
    routerLink =
        "/";

    onLogin() {
      this.router.navigateByUrl("/auth");
    }

}


