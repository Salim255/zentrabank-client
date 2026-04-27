import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Injectable({providedIn: "root"})
export class ModalsService {
  constructor(private mdlController: ModalController){}

}
