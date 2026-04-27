import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import { ibanChecksumValidator } from "../../../../../../../shared/utils/iban-checks";
import { amountStepValidator } from "../../../../../../../shared/utils/amount-validator";
import { ibanBicCountryMatchValidator } from "./iban-bic-validator";

@Injectable({ providedIn: "root" })
export class TransferFromService {

  private transferValueSubject = new BehaviorSubject<any>(null);

  constructor(private fb: FormBuilder) {}

  buildForm(): FormGroup {
    return this.fb.group({

      // 👤 Recipient Name
      recipientName: this.fb.control<string>('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(80),
        Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/)
      ]),

      // 🇪🇺 IBAN (SEPA + checksum)
      iban: this.fb.control<string>('', [
        Validators.required,
        Validators.pattern(/^[A-Z]{2}[0-9A-Z]{13,30}$/),
        ibanChecksumValidator()
      ]),

      // 🏦 BIC / SWIFT
      bic: this.fb.control<string>('', [
        Validators.required,
        Validators.pattern(/^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/)
      ]),

      // 💸 Amount (anti‑fraude)
      amount: this.fb.control<number | null>(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(1000000),
        amountStepValidator(0.01) // pas de montant bizarre
      ]),

      // 🔄 Transfer Type
      type: this.fb.control<string>('TRANSFER', [
        Validators.required
      ]),

      // 🧾 Internal account reference
      referenceAccountNumber: this.fb.control<string | null>(null, [
        Validators.maxLength(34)
      ])

    }, {
      validators: [
        ibanBicCountryMatchValidator() // optionnel mais bancaire
      ]
    });
  }

  setTransValue(value: any) {
    this.transferValueSubject.next(value);
  }

  get getValue(): Observable<any> {
    return this.transferValueSubject.asObservable();
  }
}
