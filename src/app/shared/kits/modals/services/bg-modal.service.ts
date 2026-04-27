import { Component, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface ModalState {
  isOpen: boolean;
  title?: string;
  data?: any;
}

@Injectable({providedIn: "root"})
export class BgModalService {
  constructor(){}

   private modalState = new BehaviorSubject<ModalState>({
    isOpen: false
  });

  modalState$ = this.modalState.asObservable();

  open(title: string, data?: any) {
    console.log(title)
    this.modalState.next({
      isOpen: true,
      title,
      data
    });
  }

  close() {
    this.modalState.next({
      isOpen: false
    });
  }
}
