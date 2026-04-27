import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ibanChecksumValidator() {
  return (control: AbstractControl): ValidationErrors | null => {
    const iban = (control.value || '').replace(/\s+/g, '').toUpperCase();
    if (!iban) return null;

    // Move first 4 chars to the end
    const rearranged = iban.slice(4) + iban.slice(0, 4);

    // Replace letters with numbers (A=10, B=11, ...)
    const numeric = rearranged.replace(/[A-Z]/g, (c: any) => (c.charCodeAt(0) - 55).toString());

    // Mod 97 check
    let remainder = '';
    for (let i = 0; i < numeric.length; i += 7) {
      remainder = String(Number(remainder + numeric.substring(i, i + 7)) % 97);
    }

    return Number(remainder) === 1 ? null : { ibanChecksum: true };
  };
}
