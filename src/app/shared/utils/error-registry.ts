import { FORM_ERRORS } from "./form-errors";
import { TRANSFER_FORM_ERRORS } from "./transfer-form-errors";

export const ERROR_REGISTRY: Record<string, any> = {
  ...FORM_ERRORS,
  ...TRANSFER_FORM_ERRORS,
};
