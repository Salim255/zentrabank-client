import { Component, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFormService } from '../../../../services/auth-form.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ApiErrorResponse } from '../../../../../../core/models/api-error-response.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  standalone: false
})
export class SignupFormComponent {
  signupForm!: FormGroup;
  showPassword = signal<boolean>(false);

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private authFormService: AuthFormService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.authFormService.buildForm('signup');
  }
  onSubmit(){
    if (this.signupForm.invalid) return;
    this.authService.signup(this.signupForm.value).subscribe({
      next: (res) => {
        this.router.navigate(["/application"])
      },
      error: (error: { error?: ApiErrorResponse }) => {
         const apiError = error.error;

        const message =
          apiError?.message ||
          'Something went wrong. Please try again later.';

        this.toastr.error(
          message,
          'Signup in failed',
          {
            timeOut: 3000,
            progressBar: true,
            closeButton: true
          }
        );
      }
    })

  }
}
