import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { TransferFormValue, TransferFromService } from "../../services/transfer-form.service";
import { BgModalService } from "../../../../../../../../shared/kits/modals/services/bg-modal.service";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

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
    private router: Router,
    private bgModal: BgModalService,
    private toastr: ToastrService,
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
    });
  }

  onConfirm(): void{
    if (this.form.invalid) {
      this.toastr.warning(
        'Some fields are missing or invalid. Please check the highlighted information.',
        'Incomplete form'
      );
      return;
    }
    this.transForm.submitTransferForm(this.form.value).subscribe({
          next: (res) => {
            this.toastr.success(
              'Your transfer has been successfully processed.',
              'Transfer completed'
            );
          },
          error: (err) => {
            this.toastr.error(
              'We couldn’t process your transfer. Please check the details or try again.',
              'Transfer failed'
            );
          }
    });
    this.bgModal.close();
    this.router.navigate(["/dashboard/transactions/transfer"])
  }

  onEdit(){
    this.bgModal.close();
  }

  ngOnDestroy(): void {
    this.transferFromSubscription?.unsubscribe();
  }
}
