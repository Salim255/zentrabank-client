import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AuthService } from "../../../../services/auth.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AuthFormService } from "../../../../services/auth-form.service";
import { ToastrService } from "ngx-toastr";
import { ApiErrorResponse } from "../../../../../../core/models/api-error-response.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  standalone: false
})
export class LoginFormComponent implements OnInit {
  authForm!: FormGroup;
  userSubscription!: Subscription;

  constructor(
    private toastr: ToastrService,
    private authFormService: AuthFormService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authForm = this.authFormService.buildForm('login');
    this.subscribeToUser();
  }

  subscribeToUser() {
    this.userSubscription = this.authService.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['/application']);
      }
    });
  }

  onSubmit(){
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      this.authForm.updateValueAndValidity({ onlySelf: false, emitEvent: true });
      return;
    };

    this.authService.login(this.authForm.value).subscribe({
      next: () => {

      },
      error: (error: { error?: ApiErrorResponse }) => {
        const apiError = error.error;

        const message =
          apiError?.message ||
          'Something went wrong. Please try again later.';

        this.toastr.error(
          message,
          'Sign in failed',
          {
            positionClass: 'toast-top-center',
            timeOut: 3000,
            progressBar: true,
            closeButton: true
          }
        );
      }
    });
  }

  ngOnDestroy(): void {
   this.userSubscription?.unsubscribe();
  }
}
