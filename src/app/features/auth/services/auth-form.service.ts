import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthMode } from "../dto/auth.interface";


@Injectable ({
  providedIn: "root"
})
export class AuthFormService {
  authForm!: FormGroup;
  constructor(  private buildForm: FormBuilder) {}

  buildAuthForm(mode: AuthMode): FormGroup {
    if (mode === 'login') {
      return this.buildLoginForm();
    }
    return this.buildSignupForm();
  }

  private buildLoginForm(): FormGroup {
    this.authForm = this.buildForm.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(64)
        ]
      ]
      ,
      loginId: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{9}$/), // 9 digits only
          Validators.maxLength(9)
        ]
      ],
    });

    return this.authForm;
  }

  private buildSignupForm(): FormGroup {
    return this.buildForm.group({
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      username: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(8)]
      ],
      confirmPassword: [
        '',
        [Validators.required]
      ],
      country: [
        '',
        [Validators.required]
      ],
      marketing: [
        null,
        [Validators.required]
      ]
    });
  }
}
