import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthMode } from "../dto/auth.interface";
import { passwordMatchValidator } from "../../../shared/utils/form-errors";


@Injectable ({
  providedIn: "root"
})
export class AuthFormService {
  authForm!: FormGroup;
  constructor(  private fb: FormBuilder) {}

  buildForm(mode: 'login' | 'signup'): FormGroup {
    const form = this.buildBaseSignupForm();

    if (mode === 'login') {
      this.stripSignupFields(form);
    }

    return form;
  }

  // -----------------------------------
  // BASE FORM (Signup = superset)
  // -----------------------------------
  private buildBaseSignupForm(): FormGroup {
    return this.fb.group({
      marketing: [''],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
    },
    {
      validators: passwordMatchValidator('password', 'confirmPassword')
    }
  );
  }

  // -----------------------------------
  // REMOVE FIELDS FOR LOGIN MODE
  // -----------------------------------
  private stripSignupFields(form: FormGroup) {
    form.removeControl('email');
    form.removeControl('confirmPassword');
    form.removeControl('country');
    form.removeControl('marketing');
  }
}
