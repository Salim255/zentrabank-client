import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: "root"})
export class HeroService {
  private heroModalSubject = new BehaviorSubject<boolean >(false);

  setHerModal(status: boolean){
    this.heroModalSubject.next(status);
  }
}
