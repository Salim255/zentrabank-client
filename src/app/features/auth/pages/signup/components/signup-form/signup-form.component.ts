import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  standalone: false
})
export class SignupFormComponent {
  signupForm!:FormGroup;

  onSubmit(){}
}
