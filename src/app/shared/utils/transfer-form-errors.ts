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
    max: 'Amount exceeds the allowed transfer limit.'
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
