import { Observable, of } from "rxjs";

export class User {
  constructor(
  private email: string,
  private firstLogin: boolean,
  private role: string,
  private userId: string
  ) {}

  get _email(): string {
    return this.email;
  }

  get _firstLogin(): boolean {
    return this.firstLogin;
  }

  get _role(): string {
    return this.role;
  }

  get _userId(): string {
    return this.userId;
  }

}
