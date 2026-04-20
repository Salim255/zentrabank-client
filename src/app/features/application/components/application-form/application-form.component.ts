import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-application-form",
  templateUrl: "./application-form.component.html",
  styleUrls: ["./application-form.component.scss"],
  standalone: false
})
export class ApplicationFormComponent {

  applicationForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  onContinue(){
    this.router.navigate(["/application/review"])
  }

  buildForm() {
    this.applicationForm = this.fb.group({

      // CONTACT INFORMATION
      title: this.fb.control<string | null>(null, [
        Validators.required
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

      address1: this.fb.control<string | null>(null, [
        Validators.maxLength(120)
      ]),

      city: this.fb.control<string>('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(80)
      ]),

      zip: this.fb.control<string>('', [
        Validators.required,
        Validators.pattern(/^[0-9]{4,10}$/) // flexible for international
      ]),

      phoneType: this.fb.control<string>('Mobile', [
        Validators.required
      ]),

      phone: this.fb.control<string>('', [
        Validators.required,
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
