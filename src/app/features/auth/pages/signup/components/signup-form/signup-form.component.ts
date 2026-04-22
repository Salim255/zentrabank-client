import { Component, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFormService } from '../../../../services/auth-form.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

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
      error: () => {}
    })

  }
}
