import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ApplicationFormService } from "../../services/application-form.service";

@Component({
  selector: "app-application-form",
  templateUrl: "./application-form.component.html",
  styleUrls: ["./application-form.component.scss"],
  standalone: false
})
export class ApplicationFormComponent {

  applicationForm!: FormGroup;

  constructor(
    private applicationFormService: ApplicationFormService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.applicationForm = this.applicationFormService.buildForm();
    this.applicationForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  onContinue(){
    console.log(this.applicationForm.value, this.applicationForm.valid);
    if (this.applicationForm.invalid) return;
    this.router.navigate(["/application/review"])
  }
}
