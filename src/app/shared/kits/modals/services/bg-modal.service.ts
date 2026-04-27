import { Component, Injectable, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface ModalState {
  isOpen: boolean;
  title?: string;
  component?: any;
  injector?: Injector;
}

@Injectable({providedIn: "root"})
export class BgModalService {
  constructor(){}

   private modalState = new BehaviorSubject<ModalState>({
    isOpen: false
  });

  modalState$ = this.modalState.asObservable();

  open(title: string, component: any, data?: any) {
    const injector = Injector.create({
      providers: [
        { provide: 'MODAL_DATA', useValue: data }
      ]
    });


    this.modalState.next({
      isOpen: true,
      title,
      component,
      injector
    });

    console.log(this.modalState.value)
  }

  close() {
    this.modalState.next({
      isOpen: false
    });
  }
}
