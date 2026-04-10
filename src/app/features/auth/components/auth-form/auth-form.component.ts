import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  standalone: false
})
export class AuthFormComponent implements OnInit {
  authForm!: FormGroup;
  userSubscription!: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private buildForm: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildAuthForm();
    this.authForm.valueChanges.subscribe(value => {
      console.log(value);
    });
    this.subscribeToUser();
  }

  subscribeToUser() {
    this.userSubscription = this.authService.user$.subscribe(user => {
      console.log('Current user:', user);
      if (user) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

 buildAuthForm() {
  this.authForm = this.buildForm.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(64)
      ]
    ]
    ,
    loginId: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\d{9}$/), // 9 digits only
        Validators.maxLength(9)
      ]
    ],
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
    console.log(this.authForm.value);
  }


  ngOnDestroy(): void {
   this.userSubscription?.unsubscribe();
  }
}
