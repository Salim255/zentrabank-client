import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const FORM_ERRORS: Record<string, any> = {
  loginId: {
    required: 'Client ID is required.',
    pattern: 'Client ID must be exactly 9 digits.',
    maxlength: 'Client ID cannot exceed 9 digits.'
  },
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
