export interface TransactionDto {
  id: string;
  type: TransferType;
  amount: string;
  reason: string;
  postTransactionBalance: number;
  toClientName: string;
  toAccountIbn: string;
  status: TransferStatus,
  createdAt: Date;
}

export enum TransferType {
    DEPOSIT,            // +amount
    WITHDRAWAL,         // -amount
    TRANSFER_DEBIT,     // -amount (sender)
    TRANSFER_CREDIT     // +amount (receiver)
}

export enum TransferStatus {
    PENDING,     // Created but not completed yet
    COMPLETED,   // Successfully executed
    FAILED       // Failed (insufficient funds, etc.)
}
export interface GetTransactionsResponseDto {
  status: string;
  data: {
    transactions: TransactionDto[];
  }
}
