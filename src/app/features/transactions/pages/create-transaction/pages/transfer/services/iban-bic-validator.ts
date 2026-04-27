import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ibanBicCountryMatchValidator() {
  return (group: AbstractControl): ValidationErrors | null => {
    const iban = group.get('iban')?.value;
    const bic = group.get('bic')?.value;

    if (!iban || !bic) return null;

    const ibanCountry = iban.substring(0, 2);
    const bicCountry = bic.substring(4, 6);

    return ibanCountry === bicCountry ? null : { countryMismatch: true };
  };
}
