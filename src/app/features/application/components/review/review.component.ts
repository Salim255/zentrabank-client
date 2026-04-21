import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApplicationService } from "../../services/application.service";
import { ApplicationReviewDto } from "../../model/application.model";
import { AbstractControl, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.scss"],
  standalone: false
})
export class ReviewComponent {
  today = new Date();
  applicationReviewDto: ApplicationReviewDto | null = null;
  // Signature control (local to this component)
  signatureControl = new FormControl<string>('', { nonNullable: true });

  constructor(
    private applicationService: ApplicationService,
    private router: Router,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
    this.applicationService.submitApplication(this.applicationReviewDto).subscribe({
      next: (response) => {console.log("response", response)},
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
