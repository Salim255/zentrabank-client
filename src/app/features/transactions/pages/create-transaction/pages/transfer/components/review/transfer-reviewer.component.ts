import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { TransferFromService } from "../../services/transfer-form.service";
import { BgModalService } from "../../../../../../../../shared/kits/modals/services/bg-modal.service";

@Component({
  selector: "app-trans-reviewer",
  templateUrl: "./transfer-reviewer.component.html",
  styleUrl: "./transfer-reviewer.component.scss",
  standalone: false
})
export class TransferReviewerComponent {
  private transferFromSubscription!: Subscription;
  constructor(
    private bgModalService: BgModalService,
    private transForm: TransferFromService,
  ){}

  data: any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

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
