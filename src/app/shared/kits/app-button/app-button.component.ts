import { Component, Input } from "@angular/core";

type ButtonVariant =
    | "primary"
    | "secondary"
    | "outline"
    | "danger"
    | "ghost";


type ButtonType =
    | "button"
    | "submit"
    | "reset";


@Component({
    selector: "app-button",
    templateUrl: "./app-button.component.html",
    styleUrls: ["./app-button.component.scss"],
    standalone: false
})
export class AppButtonComponent {


    /**
     * Visual style variant
     */
    @Input()
    variant: ButtonVariant = "primary";



    /**
     * Native button behavior
     */
    @Input()
    type: ButtonType = "button";



    /**
     * Disable interaction
     */
    @Input()
    disabled = false;



    /**
     * Async loading state
     */
    @Input()
    loading = false;



    /**
     * Expand button to container width
     */
    @Input()
    fullWidth = false;



    /**
     * Icon-only button mode
     *
     * Used for:
     * - close buttons
     * - action icons
     * - toolbar buttons
     */
    @Input()
    iconOnly = false;

}
