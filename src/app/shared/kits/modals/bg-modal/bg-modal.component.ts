import { Component } from "@angular/core";
import { BgModalService } from "../services/bg-modal.service";

@Component({
  selector: "app-bg-modal",
  templateUrl: "./bg-modal.component.html",
  styleUrl: "./bg-modal.component.scss",
  standalone: false
})
export class BgModalComponent{
  title: string = "";

  constructor(public modal: BgModalService) {}

  close() {
    this.modal.close();
    console.log("close", this.modal.modalState$.subscribe(v=> console.log(v)))
  }

  confirm(){}
}
