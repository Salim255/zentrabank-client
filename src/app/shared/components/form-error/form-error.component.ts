import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FORM_ERRORS } from '../../utils/form-errors';


@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
  standalone: false
})
export class FormErrorComponent {
  @Input() control!: AbstractControl | null;
  @Input() field!: string;

  get errorMessage(): string | null {
    if (!this.control || !this.control.errors) return null;

    const errors = this.control.errors;
    const fieldErrors = FORM_ERRORS[this.field];

    for (const key of Object.keys(errors)) {
      if (fieldErrors && fieldErrors[key]) {
        return fieldErrors[key];
      }
    }

    return 'Invalid field';
  }
}
