import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthMode } from "../dto/auth.interface";


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
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      country: ['', [Validators.required]],
      marketing: [null, [Validators.required]],
      loginId: ['', [Validators.required, Validators.pattern(/^\d{9}$/), Validators.maxLength(9)]]
    });
  }

  // -----------------------------------
  // REMOVE FIELDS FOR LOGIN MODE
  // -----------------------------------
  private stripSignupFields(form: FormGroup) {
    form.removeControl('username');
    form.removeControl('confirmPassword');
    form.removeControl('country');
    form.removeControl('marketing');
  }
}
