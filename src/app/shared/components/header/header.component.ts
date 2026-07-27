import { Component, Input, OnDestroy, OnInit, signal } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../features/auth/services/auth.service";
import { Subscription } from "rxjs";
import { ProfileService } from "../../../features/profile/services/profile.service";
import { ProfileDto } from "../../../features/application/model/application.model";


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

    variant:
        | "primary"
        | "secondary"
        | "outline"
        | "ghost"
        | "danger";


    type?:
        | "button"
        | "submit"
        | "reset";


    route?: string;


    action?: () => void;

}

export type HeaderVariant =
    | "light"
    | "dark";


@Component({

    selector: "app-header",

    templateUrl:
        "./header.component.html",

    styleUrls:
        ["./header.component.scss"],

    standalone: false

})
export class HeaderComponent implements OnInit, OnDestroy {

    @Input()
    headerVariant: HeaderVariant = "light";

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

    private userSubscription!: Subscription;

    profile = signal<ProfileDto | null>(null);

    constructor(private profileService: ProfileService){}


    ngOnInit(): void {
      this.subscribeToUser();
    }


    private subscribeToUser(){
      this.userSubscription = this.profileService.profileSubject$.subscribe(profile => {
        console.log(profile);
        this.profile.set(profile);
      })
    }


  ngOnDestroy(): void {

    this.userSubscription?.unsubscribe();
  }
}


