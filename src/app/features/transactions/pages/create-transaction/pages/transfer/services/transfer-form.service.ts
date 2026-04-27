import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({providedIn: "root"})
export class TransferFromService {
  transForm!: FormGroup;

  constructor(private fb: FormBuilder){}


  buildForm(): FormGroup {
    return this.fb.group({
      // Recipient Name
      recipientName: this.fb.control<string>('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(80),
        Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/)
      ]),

      // IBAN (strict format)
      iban: this.fb.control<string>('', [
        Validators.required,
        Validators.pattern(/^[A-Z]{2}[0-9A-Z]{13,30}$/) // IBAN format
      ]),

      // BIC / SWIFT
      bic: this.fb.control<string>('', [
        Validators.required,
        Validators.pattern(/^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/)
      ]),

      // Amount
      amount: this.fb.control<number | null>(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(1000000) // limite anti‑fraude
      ]),

      // Transaction Type
      type: this.fb.control<string>('TRANSFER', [
        Validators.required
      ]),

      // Optional internal account reference
      referenceAccountNumber: this.fb.control<string | null>(null, [
        Validators.maxLength(34)
      ])

    });

  }
}
