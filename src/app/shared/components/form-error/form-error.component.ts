import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FORM_ERRORS } from '../../utils/form-errors';
import { ERROR_REGISTRY } from '../../utils/error-registry';


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

    const fieldErrors = ERROR_REGISTRY[this.field];;

    for (const key of Object.keys(errors)) {
      if (fieldErrors && fieldErrors[key]) {
        return fieldErrors[key];
      }
    }


    return 'Invalid field';
  }
}
