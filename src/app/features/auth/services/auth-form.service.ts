import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export type AuthMode = 'login' | 'signup';


@Injectable ({
  providedIn: "root"
})
export class AuthFormService {
  authForm!: FormGroup;
  constructor(  private buildForm: FormBuilder) {}

   buildAuthForm(): FormGroup {
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
}
