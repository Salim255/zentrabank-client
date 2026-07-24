import { Component, Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./app-input.component.html",
  styleUrls: ["./app-input.component.scss"],
  standalone: false
})
export class AppInputComponent implements ControlValueAccessor {
    @Input() label = "";

    @Input() hint = "";

    @Input() placeholder = "";

    @Input() type: HTMLInputElement["type"] = "text";

    @Input() autocomplete = "off";

    @Input() required = false;

    @Input() disabled = false;

    @Input() readonly = false;

    value = "";

    writeValue(value: string): void {

        this.value = value ?? "";

    }

    registerOnChange(fn: any): void {

        this.onChange = fn;

    }

    registerOnTouched(fn: any): void {

        this.onTouched = fn;

    }

    setDisabledState(disabled: boolean): void {

        this.disabled = disabled;

    }

    onInput(event: Event): void {

        const value = (event.target as HTMLInputElement).value;

        this.value = value;

        this.onChange(value);

    }

    onChange = (_: string) => {};

    onTouched = () => {};

}
