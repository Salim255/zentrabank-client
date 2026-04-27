export interface TransferPostDto {
  fromAccountNumber: string;
  externalIban: string;
  externalBic: string;
  externalRecipientName: string;
  amount: bigint,
  currency: string,
  description: string
}
