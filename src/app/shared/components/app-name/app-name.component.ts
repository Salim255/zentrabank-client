import { Component, Input } from "@angular/core";

@Component({
  selector: "app-name",
  templateUrl: "./app-name.component.html",
  styleUrls: ["./app-name.component.scss"],
  standalone: false
})
export class AppNameComponent {
   @Input()
    isDark = false;

    @Input()
    showLogo = true;

    @Input()
    showName = true;


     brandName = "zentrabank";


    get logoSrc(): string {

        return !this.isDark
            ? "/brand/logo-dark.png"
            : "/brand/logo-light.png";
    }
}
