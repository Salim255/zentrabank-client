export interface ApiErrorResponse {
  status: 'error';
  message: string;
  data: null;
  timestamp?: string;
  code?: string;
  stack?: any;
}
