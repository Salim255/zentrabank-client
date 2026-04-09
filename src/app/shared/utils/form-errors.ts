export const FORM_ERRORS: Record<string, any> = {
  loginId: {
    required: 'Client ID is required.',
    pattern: 'Client ID must be exactly 9 digits.',
    maxlength: 'Client ID cannot exceed 9 digits.'
  },
  password: {
    required: 'Password is required.',
    minlength: 'Password must be at least 8 characters.',
    maxlength: 'Password cannot exceed 64 characters.'
  }
};
