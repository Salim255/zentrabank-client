import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AuthFormService } from "../../services/auth-form.service";

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
    private authFormService: AuthFormService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    //this.buildAuthForm();
    this.authForm = this.authFormService.buildAuthForm();
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

 buildAuthForm() {

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
