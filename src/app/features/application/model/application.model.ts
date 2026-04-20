export class ApplicationInstance {
  title: string | null;
  firstName: string;
  lastName: string;
  addressLine: string | null;
  city: string;
  zipCode: string;
  phoneType: string;
  phoneNumber: string;
  dob: string | null;
  employment: string | null;
  accountType: string | null;
  sourceOfWealth: {
    employmentIncome: boolean;
    marketInvestments: boolean;
    interestDividend: boolean;
    realEstate: boolean;
    inheritanceGift: boolean;
    pension: boolean;
    disabilityUnemployment: boolean;
    other: boolean;
  };
}

}
