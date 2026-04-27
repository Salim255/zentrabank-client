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
  referenceId: string;
  description: string;
  createdAt: Date;
  completedAt: Date;
}

export enum TransferStatus {
  PENDING,     // Created but not completed yet
  COMPLETED,   // Successfully executed
  FAILED
}
