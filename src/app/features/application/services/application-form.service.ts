import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Injectable ({
  providedIn: "root"
})
export class ApplicationFormService {
  authForm!: FormGroup;
  constructor(  private fb: FormBuilder) {}

  buildForm(): FormGroup {
    return this.fb.group({

      // CONTACT INFORMATION
      title: this.fb.control<string | null>(null, [
        Validators.required,
        Validators.maxLength(10)
      ]),

      firstName: this.fb.control<string>('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/) // names with accents
      ]),

      lastName: this.fb.control<string>('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/)
      ]),

      addressLine: this.fb.control<string | null>(null, [
        Validators.required,
        Validators.maxLength(120)
      ]),

      city: this.fb.control<string>('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(80)
      ]),

      zipCode: this.fb.control<string>('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern(/^[0-9]{4,10}$/) // flexible for international
      ]),

      phoneType: this.fb.control<string>('Mobile', [
        Validators.required,
        Validators.maxLength(20)
      ]),

      phoneNumber: this.fb.control<string>('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern(/^[0-9+() -]{6,20}$/)
      ]),

      // PERSONAL INFORMATION
      dob: this.fb.control<string | null>(null, [
        Validators.required
      ]),

      // EMPLOYMENT
      employment: this.fb.control<string | null>(null, [
        Validators.required
      ]),

      // ACCOUNT TYPE
      accountType: this.fb.control<string | null>(null, [
        Validators.required
      ]),

      // SOURCE OF WEALTH (checkboxes)
      sourceOfWealth: this.fb.group({
        employmentIncome: this.fb.control<boolean>(false),
        marketInvestments: this.fb.control<boolean>(false),
        interestDividend: this.fb.control<boolean>(false),
        realEstate: this.fb.control<boolean>(false),
        inheritanceGift: this.fb.control<boolean>(false),
        pension: this.fb.control<boolean>(false),
        disabilityUnemployment: this.fb.control<boolean>(false),
        other: this.fb.control<boolean>(false)
      })

    });
  }
}
