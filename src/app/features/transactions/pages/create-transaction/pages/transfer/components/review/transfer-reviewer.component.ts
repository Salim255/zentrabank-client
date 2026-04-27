import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { TransferFromService } from "../../services/transfer-form.service";
import { BgModalService } from "../../../../../../../../shared/kits/modals/services/bg-modal.service";
import { CommonModule, CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-trans-reviewer",
  templateUrl: "./transfer-reviewer.component.html",
  styleUrl: "./transfer-reviewer.component.scss",
  imports: [CurrencyPipe, CommonModule],
  standalone: true
})
export class TransferReviewerComponent {
  private transferFromSubscription!: Subscription;
  constructor(
    private transForm: TransferFromService,
  ){}

  data: any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.subscribeToForm();
    console.log(this.data, "hello");
  }


  subscribeToForm(){
    this.transferFromSubscription = this.transForm.getValue.subscribe((value) => {
      this.data = value;
    });
  }

  ngOnDestroy(): void {
    this.transferFromSubscription?.unsubscribe();
  }

  onConfirm(){

  }

  onEdit(){}
}
