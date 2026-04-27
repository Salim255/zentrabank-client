export interface TransferDto {
  id: string;
  fromAccountNumber: string;
  toAccountNumber: string;
  externalIban: string;
  externalBic: string;
  externalRecipientName: string;
  amount: BigInt;
  currency: string;
  status: TransferStatus;
  "referenceId": "TRF-20260427-231016-0D0516AA",
  "description": "Invoice payment",
  "createdAt": "2026-04-27T23:10:16.790718Z",
  "completedAt": "2026-04-27T23:10:16.792125Z"
}

export enum TransferStatus {
  PENDING,     // Created but not completed yet
  COMPLETED,   // Successfully executed
  FAILED
}
