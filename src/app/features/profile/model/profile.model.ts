export class Profile {
  public id!: string;
  public title!: "MR" | "MRS" | "MS";
  public firstName!: string;
  public lastName!: string;
  public dateOfBirth!: string; // ISO: YYYY-MM-DD
  public addressLine!: string;
  public city!: string;
  public country!: string;
  public zipCode!: string;
  public phoneNumber!: string;
  public phoneType!: "MOBILE" | "HOME" | "WORK";
  public employmentStatus!:
    | "EMPLOYED"
    | "SELF_EMPLOYED"
    | "UNEMPLOYED"
    | "STUDENT"
    | "RETIRED"
    | "OTHER";

  // Added as you requested
  public signature!: string;

  constructor(init?: Partial<Profile>) {
    Object.assign(this, init);
  }
}
