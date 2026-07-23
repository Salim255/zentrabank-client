import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({

    selector: 'landing-header',

    templateUrl: './header.component.html',

    styleUrls: ['./header.component.scss'],

    standalone: false

})
export class HeaderComponent {

  constructor(private router: Router){}

  onLogin() {
    this.router.navigateByUrl("/auth");
  }
}
