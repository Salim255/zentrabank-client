import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const TRANSFER_FORM_ERRORS: Record<string, any> = {

  // ACCOUNT SELECTION
  referenceAccountNumber: {
    required: 'Please select an account to debit.'
  },

  // 👤 RECIPIENT INFORMATION
  recipientName: {
    required: 'Recipient name is required.',
    minlength: 'Recipient name must be at least 2 characters.',
    maxlength: 'Recipient name cannot exceed 80 characters.',
    pattern: 'Recipient name contains invalid characters.'
  },

  iban: {
    required: 'IBAN is required.',
    pattern: 'Please enter a valid IBAN.'
  },

  bic: {
    required: 'BIC is required.',
    pattern: 'Please enter a valid BIC.'
  },

  // TRANSFER DETAILS
 amount: {
    required: 'Amount is required.',
    min: 'Amount must be greater than zero.',
    max: 'Amount exceeds the allowed transfer limit.',
    pattern: 'Amount must be in 0.00 format.'
  },

  transferType: {
    required: 'Please select a transfer type.'
  },

  description: {
    maxlength: 'Description cannot exceed 140 characters.'
  },

  // 🖊 SIGNATURE (review modal)
  signature: {
    required: 'Signature is required.',
    signatureMismatch: 'Signature must match your full legal name.'
  }
};

export function amountValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = Number(control.value);

    if (!value) return { required: true };
    if (value < min) return { min: true };
    if (value > max) return { max: true };

    return null;
  };
}
