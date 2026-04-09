import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  standalone: false
})
export class AuthFormComponent implements OnInit {
  authFormField!: FormGroup;
  constructor(private buildForm: FormBuilder) { }

  ngOnInit(): void {
    this.buildAuthForm();
  }

  buildAuthForm(){
    this.authFormField = this.buildForm.group({
      email: [''],
      password: ['']
    });
  }
}
