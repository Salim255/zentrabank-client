import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { ApplicationInstance, ApplicationReviewDto } from "../model/application.model";
import { ApplicationHttpService } from "./application-http.service";

@Injectable({providedIn: "root"})
export class ApplicationService {
  private applicationInstanceSubject = new BehaviorSubject<ApplicationInstance | null>(null);
  applicationInstanceSubject$ = this.applicationInstanceSubject.asObservable();

  constructor(private applicationHttpService: ApplicationHttpService){}

  setApplicationInstance(formValue: any){
    const applicationInstance: ApplicationInstance = ApplicationInstance.fromForm(formValue);
    this.applicationInstanceSubject.next(applicationInstance);
  }

  getSnapshot(): ApplicationInstance | null {
    return this.applicationInstanceSubject.value;
  }

  clear() {
    this.applicationInstanceSubject.next(null);
  }

 mapToReviewDto(
    payload: ReturnType<ApplicationInstance['toPayload']>
  ): ApplicationReviewDto {
    return {
      title: payload.title ?? '',
      firstName: payload.firstName,
      lastName: payload.lastName,
      addressLine: payload.addressLine ?? '',
      city: payload.city,
      zipCode: payload.zipCode,
      phoneType: payload.phoneType,
      phoneNumber: payload.phoneNumber,
      dob: payload.dob ? new Date(payload.dob) : null,
      employment: payload.employment ?? '',
      accountType: payload.accountType ?? '',
      sourceOfWealth: Object.entries(payload.sourceOfWealth)
        .filter(([_, v]) => v === true)
        .map(([k]) => k)
    };
  }

  getReviewDto(): Observable<ApplicationReviewDto | null> {
    return this.applicationInstanceSubject$.pipe(
      map(instance => {
        if (!instance) return null;
        return this.mapToReviewDto(instance.toPayload());
      })
    );
  }

  createApplication(payload: ApplicationReviewDto):Observable<any>{
    return this.applicationHttpService.createApplication(payload)
  }
}
