import {
  Component,
  Input,
  Optional,
  Self
} from "@angular/core";

import {
  ControlValueAccessor,
  NgControl
} from "@angular/forms";


@Component({
  selector: "app-input",
  templateUrl: "./app-input.component.html",
  styleUrls: ["./app-input.component.scss"],
  standalone: false
})
export class AppInputComponent implements ControlValueAccessor {


    /* ==========================================================
       INPUT API
    ========================================================== */

    @Input()
    label = "";



    @Input()
    name = "";



    @Input()
    placeholder = "";



    @Input()
    hint = "";



    @Input()
    type: HTMLInputElement["type"] = "text";



    @Input()
    autocomplete = "off";



    @Input()
    required = false;



    @Input()
    readonly = false;



    private static nextId = 0;


    @Input()
    id = `app-input-${AppInputComponent.nextId++}`;




    /* ==========================================================
       STATE
    ========================================================== */

    value = "";

    disabled = false;




    /* ==========================================================
       CONTROL VALUE ACCESSOR
    ========================================================== */

    private onChange: (value: string) => void = () => {};

    private onTouched: () => void = () => {};





    constructor(

        @Optional()
        @Self()
        public readonly ngControl: NgControl

    ) {


        if (this.ngControl) {

            this.ngControl.valueAccessor = this;

        }

    }





    writeValue(value: string | null): void {

        this.value = value ?? "";

    }





    registerOnChange(
        fn: (value: string) => void
    ): void {

        this.onChange = fn;

    }





    registerOnTouched(
        fn: () => void
    ): void {

        this.onTouched = fn;

    }





    setDisabledState(
        isDisabled: boolean
    ): void {

        this.disabled = isDisabled;

    }







    /* ==========================================================
       EVENTS
    ========================================================== */


    onInput(
        event: Event
    ): void {


        const value =
            (event.target as HTMLInputElement).value;



        this.value = value;


        this.onChange(value);

    }





    onBlur(): void {


        this.onTouched();


        this.control?.markAsTouched();

    }





    /* ==========================================================
       FORM STATE
    ========================================================== */


    get control() {

        return this.ngControl?.control;

    }





    get invalid(): boolean {

        return !!this.control?.invalid;

    }





    get touched(): boolean {

        return !!this.control?.touched;

    }





    get dirty(): boolean {

        return !!this.control?.dirty;

    }



    get errorMessage(): string | null {

        if (!this.control || !this.showError) {
            return null;
        }


        if (this.control.hasError('required')) {

            return `${this.label} is required`;

        }


        if (this.control.hasError('email')) {

            return 'Please enter a valid email address';

        }


        if (this.control.hasError('minlength')) {

            return `${this.label} is too short`;

        }


        return null;

    }

    get showError(): boolean {


        return !!this.control &&
            this.control.invalid &&
            (
                this.control.touched ||
                this.control.dirty
            );

    }

}
