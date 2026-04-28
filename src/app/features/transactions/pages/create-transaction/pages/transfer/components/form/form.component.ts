import { Component, Injector, OnInit, signal } from "@angular/core";
import { TransferFromService } from "../../services/transfer-form.service";
import { FormGroup } from "@angular/forms";
import { BgModalService } from "../../../../../../../../shared/kits/modals/services/bg-modal.service";
import { TransferReviewerComponent } from "../review/transfer-reviewer.component";
import { AccountService } from "../../../../../../../accounts/services/account.service";
import { Subscription } from "rxjs";
import { Account } from "../../../../../../../accounts/model/account.model";

@Component({
  selector: "app-transfer-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  standalone: false
})
export class FormComponent implements OnInit {
  transForm!: FormGroup;
  private accountsSubscription!: Subscription;
  userAccounts= signal< Account []> ([]);

  constructor(
    private accountsService: AccountService,
    private bgModal: BgModalService,
    private formService:TransferFromService) {
    this.transForm = this.formService.buildForm();
    this.formService.initForm(this.transForm);
  }


  ngOnInit(): void {
    this.accountsService.getUserAccounts().subscribe()
    this.subscribeToAccounts();
  }

  subscribeToAccounts(){
    this.accountsSubscription = this.accountsService.getAccounts.subscribe(accounts => {
      this.userAccounts.set(accounts);
    })
  }

  onTransfer(): void{

    if (this.transForm.invalid) {
      this.transForm.markAllAsTouched();
      this.transForm.updateValueAndValidity({ onlySelf: false, emitEvent: true });
      return
    };

    this.formService.setTransValue(this.transForm.value)
    this.openReview();
  }

  openReview() {
    this.bgModal.open(
      'Review Transfer',
      TransferReviewerComponent
    );
  }

  blockInvalidKeys(event: KeyboardEvent) {
    const invalid = ['-', '+', 'e', 'E'];
    if (invalid.includes(event.key)) {
      event.preventDefault();
    }
  }

  blockInvalidPaste(event: ClipboardEvent) {
    const pasted = event.clipboardData?.getData('text') || '';
    if (!/^[0-9.,]+$/.test(pasted)) {
      event.preventDefault();
    }
  }

  formatAmount(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(',', '.');

    // Remove invalid characters
    value = value.replace(/[^0-9.]/g, '');

    // Prevent multiple dots
    const parts = value.split('.');
    if (parts.length > 2) {
      value = parts[0] + '.' + parts[1];
    }

    // Limit decimals to 2
    if (parts[1]?.length > 2) {
      value = parts[0] + '.' + parts[1].substring(0, 2);
    }

    input.value = value;
    this.transForm.get('amount')?.setValue(value, { emitEvent: false });
  }

  finalizeAmount(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = parseFloat(input.value);

    if (isNaN(value) || value < 0) value = 0;

    input.value = value.toFixed(2);
    this.transForm.get('amount')?.setValue(input.value, { emitEvent: false });
  }

  ngOnDestroy(): void {
    this.accountsSubscription?.unsubscribe();
  }
}
