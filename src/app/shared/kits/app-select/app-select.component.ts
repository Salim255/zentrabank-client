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

import {
    ChevronDown,
    LucideIconData,
} from "lucide-angular";



export interface SelectOption {

    label: string;

    value: string;

    icon?: LucideIconData;

}



@Component({

    selector: "app-select",

    templateUrl: "./app-select.component.html",

    styleUrls: ["./app-select.component.scss"],

    standalone: false

})
export class AppSelectComponent implements ControlValueAccessor {



    readonly ChevronDown = ChevronDown;



    @Input()
    label = "";



    @Input()
    name = "";



    @Input()
    placeholder = "Select option";



    @Input()
    options: SelectOption[] = [];



    @Input()
    required = false;



    @Input()
    disabled = false;



    @Input()
    hint = "";



    private static nextId = 0;



    @Input()
    id = `app-select-${AppSelectComponent.nextId++}`;



    value = "";



    open = false;





    constructor(

        @Optional()

        @Self()

        public readonly ngControl: NgControl

    ) {


        if (this.ngControl) {

            this.ngControl.valueAccessor = this;

        }

    }








    /*
    ==========================================================
       CONTROL VALUE ACCESSOR
    ==========================================================
    */


    writeValue(
        value: string
    ): void {


        this.value = value ?? "";


    }







    registerOnChange(
        fn: any
    ): void {


        this.onChange = fn;


    }







    registerOnTouched(
        fn: any
    ): void {


        this.onTouched = fn;


    }







    setDisabledState(
        disabled: boolean
    ): void {


        this.disabled = disabled;


    }









    onChange = (
        _value: string
    ) => {};



    onTouched = () => {};









    /*
    ==========================================================
       DROPDOWN LOGIC
    ==========================================================
    */


    toggleDropdown(): void {


        if (this.disabled) {

            return;

        }


        this.open = !this.open;


    }









    selectOption(
        option: SelectOption
    ): void {


        this.value = option.value;


        this.onChange(
            option.value
        );


        this.open = false;


        this.onTouched();


    }









    onBlur(): void {


        this.onTouched();


        // later we can improve this
        // with clickOutside directive

    }









    /*
    ==========================================================
       STATE
    ==========================================================
    */



    get selectedOption(): SelectOption | undefined {


        return this.options.find(

            option => option.value === this.value

        );


    }







    get control() {


        return this.ngControl?.control;


    }







    get showError(): boolean {


        if (!this.control) {

            return false;

        }


        return (

            this.control.invalid &&

            (
                this.control.touched ||

                this.control.dirty
            )

        );


    }





}
