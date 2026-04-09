export class User {
  constructor(
  private email: string,
  private firstLogin: boolean,
  private firstName: string,
  private lastName: string,
  private role: string,
  private userId: string
  ) {}

  get Email(): string {
    return this.email;
  }

  get FirstLogin(): boolean {
    return this.firstLogin;
  }

  get FirstName(): string {
    return this.firstName;
  }

  get LastName(): string {
    return this.lastName;
  }

  get Role(): string {
    return this.role;
  }

  get UserId(): string {
    return this.userId;
  }
}
