import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './features/auth/services/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private authSub!: Subscription;
  private previousAuthState = signal(false);

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.subscribeToAuth();
  }

  private subscribeToAuth(){
    this.authSub  = this.authService.userIsAuthenticated.subscribe(isAuth => {
        if (!isAuth && this.previousAuthState() !== isAuth) {
          this.router.navigate(['/auth']);
        }
        this.previousAuthState.set(isAuth);
    });
  }

  ngOnDestroy(): void {
    this.authSub?.unsubscribe();
  }
}
