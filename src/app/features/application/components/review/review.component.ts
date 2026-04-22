import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApplicationService } from "../../services/application.service";
import { ApplicationReviewDto } from "../../model/application.model";
import { AbstractControl, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.scss"],
  standalone: false
})
export class ReviewComponent implements OnInit {
  today = new Date();
  applicationReviewDto: ApplicationReviewDto | null = null;
  // Signature control (local to this component)
  signatureControl = new FormControl<string>('', { nonNullable: true });

  constructor(
    private applicationService: ApplicationService,
    private router: Router){}

  ngOnInit(): void {
   this.applicationService.getReviewDto().subscribe(dto => {
      if(!dto) return;
      this.applicationReviewDto = dto;

      this.applicationReviewDto = dto;
      this.setupSignatureValidator(dto);
    });
  }

  onBack(){
    this.router.navigate(["/application"])
  }

  onSubmit(){
    if (this.signatureControl.invalid || !this.applicationReviewDto) return;
    this.applicationReviewDto.signature = this.signatureControl.value;
    this.applicationService.submitApplication(this.applicationReviewDto).subscribe({
      next: (response) => {
        this.router.navigate(["/dashboard/accounts"]);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  private setupSignatureValidator(dto: ApplicationReviewDto) {
    const expectedFullName = `${dto.firstName} ${dto.lastName}`;

    this.signatureControl.setValidators([
      Validators.required,
      this.signatureValidator(expectedFullName)
    ]);

    this.signatureControl.updateValueAndValidity();
  }

  private signatureValidator(expected: string) {
    return (control: AbstractControl) => {
      const value = (control.value || '').trim();
      if (!value) return { required: true };
      return value === expected ? null : { signatureMismatch: true };
    };
  }
}
