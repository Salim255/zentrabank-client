import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { ApplicationInstance, ApplicationResponseDto, ApplicationReviewDto } from "../model/application.model";
import { ApplicationHttpService } from "./application-http.service";
import { ProfileService } from "../../profile/services/profile.service";
import { Profile } from "../../profile/model/profile.model";


@Injectable({providedIn: "root"})
export class ApplicationService {
  private applicationInstanceSubject = new BehaviorSubject<ApplicationInstance | null>(null);
  applicationInstanceSubject$ = this.applicationInstanceSubject.asObservable();

  constructor(
    private profileService: ProfileService,
    private applicationHttpService: ApplicationHttpService,
  ){}

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
      country: payload.country ?? '',
      city: payload.city,
      zipCode: payload.zipCode,
      phoneType: payload.phoneType,
      phoneNumber: payload.phoneNumber,
      dob: payload.dob ? new Date(payload.dob) : null,
      employmentStatus: payload.employmentStatus ?? '',
      accountType: payload.accountType ?? '',
      signature: payload.signature ?? "signature",
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


  submitApplication(payload: ApplicationReviewDto): Observable<ApplicationResponseDto>{
    const payLoadToSubmit: ApplicationReviewDto = {
      ...payload,
      employmentStatus: this.employmentStatusMap[payload.employmentStatus]
    }
    return this.applicationHttpService.createApplication(payLoadToSubmit).pipe(
      tap(res => {
        const profileDto = res.data.profile;
        const profileInstance = new Profile(profileDto);
        this.profileService.setProfile(profileInstance);
      })
    )
  }

  private employmentStatusMap: Record<string, string> = {
    employed: "EMPLOYED",
    selfEmployed: "SELF_EMPLOYED",
    unemployed: "UNEMPLOYED",
    student: "STUDENT",
    retired: "RETIRED",
    homemaker: "HOMEMAKER",
    military: "MILITARY",
    other: "OTHER"
  };
}
