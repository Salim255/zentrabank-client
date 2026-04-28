import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import { ibanChecksumValidator } from "../../../../../../../shared/utils/iban-checks";
import { ibanBicCountryMatchValidator } from "./iban-bic-validator";
import { TransferPostDto } from "../dto/transfer-post.dto";
import { TransferService } from "./transfer.service";
import { TextValueAccessor } from "@ionic/angular";

export interface TransferFormValue {
  recipientName: string;
  iban: string;
  bic: string;
  amount: string;
  type: string;
  fromAccountNumber: string;
}


@Injectable({ providedIn: "root" })
export class TransferFromService {
  private form!: FormGroup;
  private transferValueSubject = new BehaviorSubject<TransferFormValue| null>(null);

  constructor(
    private transferService: TransferService,
    private fb: FormBuilder,
  ) {}

   // ----------------------------------------------------
  // INIT FORM (called from the form component)
  // ----------------------------------------------------
  initForm(form: FormGroup) {
    this.form = form;
  }

  get formGroup(): FormGroup {
    return this.form;
  }

  buildForm(): FormGroup {
    return this.fb.group({

      // Recipient Name
      recipientName: this.fb.control<string>('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(80),
        Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/)
      ]),

      // IBAN (SEPA + checksum)
      iban: this.fb.control<string>('', [
        Validators.required,
        Validators.pattern(/^[A-Z]{2}[0-9A-Z]{13,30}$/),
        ibanChecksumValidator()
      ]),

      // BIC / SWIFT
      bic: this.fb.control<string>('', [
        Validators.required,
        Validators.pattern(/^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/)
      ]),

      // Amount (anti‑fraude)
      amount: this.fb.control<string>("", [
        Validators.required,
        Validators.pattern(/^\d+(\.\d{1,2})?$/),
        Validators.min(0.01),
        Validators.max(1000000)
      ]),

      // Transfer Type
      type: this.fb.control<string>('TRANSFER', [
        Validators.required
      ]),

      // Internal account reference
      fromAccountNumber: this.fb.control<string | null>(null, [
        Validators.maxLength(34),
        Validators.required
      ])

    }, {
      validators: [
        ibanBicCountryMatchValidator() // optionnel mais bancaire
      ]
    });
  }

  setTransValue(value: TransferFormValue | null) {
    this.transferValueSubject.next(value);
  }

  submitTransferForm(value: TransferFormValue){
    const dto: TransferPostDto = this.buildTransferPostDto(value);
    this.transferService.createTransfer(dto).subscribe()
  }

  buildTransferPostDto(value: TransferFormValue): TransferPostDto {
    const formValue = value;
    return {
      fromAccountNumber: formValue?.fromAccountNumber!,
      externalIban: formValue?.iban!,
      externalBic: formValue?.bic!,
      externalRecipientName: formValue?.recipientName!,
      amount: Number(formValue?.amount),
      currency: "USD",
      description: ""
    };
  }

  get getValue(): Observable<TransferFormValue | null> {
    return this.transferValueSubject.asObservable();
  }
}
