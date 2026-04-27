import { AbstractControl, ValidationErrors } from "@angular/forms";

export function amountStepValidator(step: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = Number(control.value);
    if (!value) return null;

    return value % step === 0 ? null : { invalidStep: true };
  };
}
