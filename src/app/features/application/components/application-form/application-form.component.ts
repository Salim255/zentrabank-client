import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ApplicationFormService } from "../../services/application-form.service";
import { ApplicationService } from "../../services/application.service";

@Component({
  selector: "app-application-form",
  templateUrl: "./application-form.component.html",
  styleUrls: ["./application-form.component.scss"],
  standalone: false
})
export class ApplicationFormComponent {

  applicationForm!: FormGroup;

  constructor(
    private applicationService: ApplicationService,
    private applicationFormService: ApplicationFormService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.applicationForm = this.applicationFormService.buildForm();
  }

  onContinue(){
    console.log(this.applicationForm.value);
    if (this.applicationForm.invalid) return;
    this.applicationService.setApplicationInstance(this.applicationForm.value);
    this.router.navigate(["/application/review"])
  }
}
