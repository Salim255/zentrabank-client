import { Component, OnInit } from "@angular/core";
import { TransferFromService } from "../../services/transfer-form.service";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-transfer-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  standalone: false
})
export class FormComponent implements OnInit {
  transForm!: FormGroup;
  constructor(private formService:TransferFromService) {
    this.transForm = this.formService.buildForm();
  }


  ngOnInit(): void {
    this.transForm.valueChanges.subscribe(v => {
      console.log(v);
    })
  }

  onTransfer(): void{
    if (this.transForm.invalid) return;


  }
}
