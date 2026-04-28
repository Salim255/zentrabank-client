export interface TransactionDto {
  id: string;
  type: string;
  amount: string;
  reason: string;
  postTransactionBalance: number;
  toClientName: string;
  toAccountIbn: string;
  createdAt: Date;
}

export interface GetTransactionsResponseDto {
  status: string;
  data: {
    transactions: TransactionDto[];
  }
}
