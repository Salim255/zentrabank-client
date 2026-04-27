import { Component, Injector, OnInit } from "@angular/core";
import { TransferFromService } from "../../services/transfer-form.service";
import { FormGroup } from "@angular/forms";
import { BgModalService } from "../../../../../../../../shared/kits/modals/services/bg-modal.service";
import { TransferReviewerComponent } from "../review/transfer-reviewer.component";

@Component({
  selector: "app-transfer-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  standalone: false
})
export class FormComponent implements OnInit {
  transForm!: FormGroup;
  constructor(
    private bgModal: BgModalService,
    private formService:TransferFromService) {
    this.transForm = this.formService.buildForm();
  }


  ngOnInit(): void {
    this.transForm.valueChanges.subscribe(v => {
      console.log(v);
    })
  }

  onTransfer(): void{
    this.openReview();
    if (this.transForm.invalid) return;
  }

  openReview() {
    this.bgModal.open('Review Transfer', {
      component: TransferReviewerComponent
    });
  }
}
