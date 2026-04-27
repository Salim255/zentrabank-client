import { Component, signal } from "@angular/core";
import { BgModalService, ModalState } from "../services/bg-modal.service";
import { CommonModule, NgComponentOutlet } from "@angular/common";

@Component({
  selector: "app-bg-modal",
  templateUrl: "./bg-modal.component.html",
  styleUrl: "./bg-modal.component.scss",
  imports: [NgComponentOutlet, CommonModule],
  standalone: true
})
export class BgModalComponent{

  state = signal<ModalState | null>( null);

  constructor(private modal: BgModalService) {}

  ngOnInit(): void {
    this.modal.modalState$.subscribe(v=> this.state.set(v));
    console.log(this.state())
  }

  close() {
    this.modal.close();
  }

  confirm(){}
}
