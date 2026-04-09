import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  standalone: false
})
export class AuthFormComponent implements OnInit {
  authForm!: FormGroup;
  constructor(private buildForm: FormBuilder) { }

  ngOnInit(): void {
    this.buildAuthForm();
    this.authForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

 buildAuthForm() {
  this.authForm = this.buildForm.group({
    loginId: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\d{9}$/), // 9 digits only
        Validators.maxLength(9)
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
  });
}

  onSubmit(){
    console.log(this.authForm.value);
  }
}
