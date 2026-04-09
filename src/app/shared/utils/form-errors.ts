export const FORM_ERRORS: Record<string, any> = {
  loginId: {
    required: 'Login ID is required.',
    pattern: 'Login ID must be exactly 9 digits.',
    maxlength: 'Login ID cannot exceed 9 digits.'
  },
  password: {
    required: 'Password is required.',
    minlength: 'Password must be at least 8 characters.',
    maxlength: 'Password cannot exceed 64 characters.'
  }
};
