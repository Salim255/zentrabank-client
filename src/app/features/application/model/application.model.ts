export interface ApplicationResponseDto {
  status: string;
  data: {
    account: AccountDto;
    profile: ProfileDto;
  };
}

export interface ProfileDto {
  id: string;
  title: "MR" | "MRS" | "MS";
  firstName: string;
  lastName: string;
  dateOfBirth: string; // "YYYY-MM-DD"
  addressLine: string;
  city: string;
  country: string;
  zipCode: string;
  phoneNumber: string;
  phoneType: "MOBILE" | "HOME" | "WORK";
  employmentStatus:
    | "EMPLOYED"
    | "SELF_EMPLOYED"
    | "UNEMPLOYED"
    | "STUDENT"
    | "RETIRED"
    | "OTHER";
}

export interface AccountDto {
  id: string;
  accountNumber: string;
  balance: number;
  type: "CHECKING" | "SAVINGS" | "CREDIT" | "LOAN";
  status: "ACTIVE" | "INACTIVE" | "CLOSED";
  currency: string;
  iban: string;
  bic: string;
  overdraftEnabled: boolean;
  overdraftLimit: number;
  createdAt: string;   // ISO timestamp
  updatedAt: string;   // ISO timestamp
}

export interface AccountDto {
  id: string;
  accountNumber: string;
  balance: number;
  type: "CHECKING" | "SAVINGS" | "CREDIT" | "LOAN";
  status: "ACTIVE" | "INACTIVE" | "CLOSED";
  currency: string;
  iban: string;
  bic: string;
  overdraftEnabled: boolean;
  overdraftLimit: number;
  createdAt: string;   // ISO timestamp
  updatedAt: string;   // ISO timestamp
}


export interface ApplicationReviewDto {
  title: string;
  firstName: string;
  lastName: string;
  dob: Date | null;
  addressLine: string;
  country: string;
  city: string;
  zipCode: string;
  phoneType: string;
  phoneNumber: string;
  employmentStatus: string;
  accountType: string;
  sourceOfWealth: string[];
  signature: string;
}

export enum EmploymentStatus {
  OTHER,
  HOMEMAKER,
  UNEMPLOYED,
  RETIRED,
  STUDENT,
  MILITARY,
  SELF_EMPLOYED,
  EMPLOYED
}
export enum SourceOfFunds {
    SALARY,
    BUSINESS_REVENUE,
    TRANSFER_FROM_OTHER_BANK,
    CASH_DEPOSIT,
    INVESTMENT_PROCEEDS,
    LOAN_DISBURSEMENT,
    OTHER
}


export class ApplicationInstance {

  // -------------------------
  // PRIVATE FIELDS
  // -------------------------
  private _title: string | null = null;
  private _firstName = '';
  private _lastName = '';
  private _addressLine: string | null = null;
  private _city = '';
  private _country: string | null = null;
  private _zipCode = '';
  private _phoneType = 'Mobile';
  private _phoneNumber = '';
  private _dob: string | null = null;
  private _employmentStatus: string | null = null;
  private _accountType: string | null = null;
  private _signature: string | null = null;

  private _sourceOfWealth = {
    employmentIncome: false,
    marketInvestments: false,
    interestDividend: false,
    realEstate: false,
    inheritanceGift: false,
    pension: false,
    disabilityUnemployment: false,
    other: false
  };

  // -------------------------
  // GETTERS
  // -------------------------
  get title() { return this._title; }
  get firstName() { return this._firstName; }
  get lastName() { return this._lastName; }
  get addressLine() { return this._addressLine; }
  get country() {return this._country; }
  get city() { return this._city; }
  get zipCode() { return this._zipCode; }
  get phoneType() { return this._phoneType; }
  get phoneNumber() { return this._phoneNumber; }
  get dob() { return this._dob; }
  get employmentStatus() { return this._employmentStatus; }
  get accountType() { return this._accountType; }
  get sourceOfWealth() { return this._sourceOfWealth; }
  get signature() {return this._signature; }

  // -------------------------
  // SETTERS (CONTROLLED)
  // -------------------------
  setTitle(value: string | null) {
    this._title = value;
  }

  setFirstName(value: string) {
    if (!value || value.length < 2) throw new Error('Invalid first name');
    this._firstName = value;
  }

  setLastName(value: string) {
    if (!value || value.length < 2) throw new Error('Invalid last name');
    this._lastName = value;
  }

  setAddressLine(value: string | null) {
    this._addressLine = value;
  }

  setCity(value: string) {
    if (!value) throw new Error('City required');
    this._city = value;
  }

  setZipCode(value: string) {
    this._zipCode = value;
  }

  setPhoneType(value: string) {
    this._phoneType = value;
  }

  setPhoneNumber(value: string) {
    this._phoneNumber = value;
  }

  setDob(value: string | null) {
    this._dob = value;
  }

  setEmployment(value: string | null) {
    this._employmentStatus = value;
  }
  setSignature(value: string | null) {
    this._signature = value;
  }

  setAccountType(value: string | null) {
    this._accountType = value;
  }

  setSourceOfWealth(value: any) {
    this._sourceOfWealth = { ...value };
  }
  setCountry(value:  string | null){
    this._country = value;
  }

  // -------------------------
  // FACTORY: from form
  // -------------------------
  static fromForm(formValue: any): ApplicationInstance {
    const instance = new ApplicationInstance();

    instance.setTitle(formValue.title);
    instance.setFirstName(formValue.firstName);
    instance.setLastName(formValue.lastName);
    instance.setCountry(formValue.country);
    instance.setAddressLine(formValue.addressLine);
    instance.setCity(formValue.city);
    instance.setZipCode(formValue.zipCode);
    instance.setPhoneType(formValue.phoneType);
    instance.setPhoneNumber(formValue.phoneNumber);
    instance.setDob(formValue.dob);
    instance.setEmployment(formValue.employmentStatus);
    instance.setSignature(formValue.signature);
    instance.setAccountType(formValue.accountType);
    instance.setSourceOfWealth(formValue.sourceOfWealth);

    return instance;
  }

  // -------------------------
  // SERIALIZER: to backend
  // -------------------------
  toPayload() {
    return {
      title: this._title,
      firstName: this._firstName,
      lastName: this._lastName,
      country: this._country,
      addressLine: this._addressLine,
      city: this._city,
      zipCode: this._zipCode,
      phoneType: this._phoneType,
      phoneNumber: this._phoneNumber,
      dob: this._dob,
      employmentStatus: this._employmentStatus,
      accountType: this._accountType,
      sourceOfWealth: this._sourceOfWealth,
      signature: this._signature
    };
  }
}
