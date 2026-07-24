import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  ShieldCheck,
  UserRound,
  FileText,
  Contact,
  ReceiptText,
  LogIn
} from 'lucide-angular';

@Component({
  selector: "app-instructions",
  templateUrl: "./instructions.component.html",
  styleUrls: ["./instructions.component.scss"],
  standalone: false
})
export class InstructionsComponent {
  ShieldCheckIcon = ShieldCheck;

  UserRoundIcon = UserRound;

  FileTextIcon = FileText;

  ContactIcon = Contact;

  ReceiptTextIcon = ReceiptText;

  LogInIcon = LogIn;

  constructor(private router:Router){}
  onNavigate(){
    this.router.navigate(["/auth/login"]);
  }
}
