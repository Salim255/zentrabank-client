export class User {
  constructor(
  private email: string,
  private firstLogin: boolean,
  private firstName: string,
  private lastName: string,
  private role: string,
  private userId: string
  ) {}

  get _email(): string {
    return this.email;
  }

  get _firstLogin(): boolean {
    return this.firstLogin;
  }

  get _firstName(): string {
    return this.firstName;
  }

  get _lastName(): string {
    return this.lastName;
  }

  get _role(): string {
    return this.role;
  }

  get _userId(): string {
    return this.userId;
  }
}
