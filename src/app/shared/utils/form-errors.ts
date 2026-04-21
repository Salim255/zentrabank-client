import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const FORM_ERRORS: Record<string, any> = {

  signature: {
    required: 'Signature is required.',
    signatureMismatch: 'Signature must match your full legal name.'
  }
  ,
  // LOGIN / AUTH
  email: {
    required: 'Email is required.',
    email: 'Please enter a valid email address.'
  },
  password: {
    required: 'Password is required.',
    minlength: 'Password must be at least 8 characters.',
    maxlength: 'Password cannot exceed 64 characters.'
  },
  confirmPassword: {
    required: 'Please confirm your password.',
    minlength: 'Password must be at least 8 characters.',
    maxlength: 'Password cannot exceed 64 characters.'
  },
  username: {
    required: 'Username is required.',
    minlength: 'Username must be at least 3 characters.',
    maxlength: 'Username cannot exceed 64 characters.'
  },
  passwordMismatch: 'Passwords do not match.',


  // APPLICATION FORM — CONTACT INFORMATION
  title: {
    required: 'Please select a title.'
  },
  firstName: {
    required: 'First name is required.',
    minlength: 'First name must be at least 2 characters.',
    maxlength: 'First name cannot exceed 50 characters.',
    pattern: 'First name contains invalid characters.'
  },
  lastName: {
    required: 'Last name is required.',
    minlength: 'Last name must be at least 2 characters.',
    maxlength: 'Last name cannot exceed 50 characters.',
    pattern: 'Last name contains invalid characters.'
  },
  addressLine: {
    required: 'Address is required',
    maxlength: 'Address cannot exceed 120 characters.'
  },
  city: {
    required: 'City is required.',
    minlength: 'City must be at least 2 characters.',
    maxlength: 'City cannot exceed 80 characters.'
  },
  zipCode: {
    required: 'Postal code is required.',
    pattern: 'Postal code format is invalid.'
  },
  phoneType: {
    required: 'Please select a phone type.'
  },
  phoneNumber: {
    required: 'Phone number is required.',
    pattern: 'Phone number format is invalid.'
  },

  // PERSONAL INFORMATION
  dob: {
    required: 'Date of birth is required.'
  },

  // EMPLOYMENT
  employment: {
    required: 'Please select your employment status.'
  },

  // ACCOUNT TYPE
  accountType: {
    required: 'Please select an account type.'
  },

  // SOURCE OF WEALTH (checkbox group)
  sourceOfWealth: {
    required: 'Please select at least one source of wealth.'
  },

  // COUNTRY / MARKETING (from your previous config)
  country: {
    required: 'Country selection is required.'
  },
  marketing: {
    required: 'Please indicate your marketing preferences.'
  }
};

export function passwordMatchValidator(
  passwordField: string,
  confirmPasswordField: string
): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get(passwordField)?.value;
    const confirm = group.get(confirmPasswordField)?.value;

    if (!password || !confirm) return null;

    return password === confirm ? null : { passwordMismatch: true };
  };
}

export function signatureValidator(expectedFullName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = (control.value || '').trim();
    if (!value) return { required: true };

    return value === expectedFullName ? null : { signatureMismatch: true };
  };
}
