import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApplicationService } from "../../services/application.service";
import { ApplicationReviewDto } from "../../model/application.model";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.scss"],
  standalone: false
})
export class ReviewComponent {
  applicationReviewDto: ApplicationReviewDto | null = null;
  constructor(
    private applicationService: ApplicationService,
    private router: Router,
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.applicationService.getReviewDto().subscribe(dto => {
      this.applicationReviewDto = dto;
    });
  }

  onBack(){
    this.router.navigate(["/application"])
  }

}
