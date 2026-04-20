import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AuthService } from "../../../../services/auth.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AuthFormService } from "../../../../services/auth-form.service";

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
    private authFormService: AuthFormService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authForm = this.authFormService.buildForm('login');
      this.authForm.valueChanges.subscribe(value => {
      console.log(value);
    });
    this.subscribeToUser();
  }

  subscribeToUser() {
    this.userSubscription = this.authService.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  onSubmit(){
    this.authService.login(this.authForm.value).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }

  ngOnDestroy(): void {
   this.userSubscription?.unsubscribe();
  }
}
