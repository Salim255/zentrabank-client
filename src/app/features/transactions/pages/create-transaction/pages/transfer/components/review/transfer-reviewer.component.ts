import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { TransferFormValue, TransferFromService } from "../../services/transfer-form.service";
import { BgModalService } from "../../../../../../../../shared/kits/modals/services/bg-modal.service";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-trans-reviewer",
  templateUrl: "./transfer-reviewer.component.html",
  styleUrl: "./transfer-reviewer.component.scss",
  imports: [CurrencyPipe, CommonModule],
  standalone: true
})
export class TransferReviewerComponent {
  private transferFromSubscription!: Subscription;
   form!: FormGroup;
  constructor(
    private transForm: TransferFromService,
  ){
    this.form = this.transForm.formGroup;
  }

  data!: TransferFormValue | null;

  ngOnInit(): void {
    this.subscribeToForm();
    console.log(this.data, "hello");
  }


  subscribeToForm(){
    this.transferFromSubscription = this.transForm.getValue.subscribe((value) => {
      this.data = value;
      console.log(value, "data")
    });
  }

  ngOnDestroy(): void {
    this.transferFromSubscription?.unsubscribe();
  }

  onConfirm(){
    if(this.form.invalid) return;
    this.transForm.submitTransferForm(this.form.value);
  }

  onEdit(){}
}
