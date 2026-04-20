import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ApplicationInstance } from "../model/application.model";

@Injectable({providedIn: "root"})
export class ApplicationService {
  private applicationInstanceSubject = new BehaviorSubject<ApplicationInstance | null>(null);
  applicationInstanceSubject$ = this.applicationInstanceSubject.asObservable();

}
