import { Component, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFormService } from '../../../../services/auth-form.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  standalone: false
})
export class SignupFormComponent {
  signupForm!: FormGroup;
  showPassword = signal<boolean>(false);
  constructor(private authFormService: AuthFormService) {}

  ngOnInit(): void {
    this.signupForm = this.authFormService.buildForm('signup');
     this.signupForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }
  onSubmit(){
    console.log(this.signupForm.value);
  }
}
