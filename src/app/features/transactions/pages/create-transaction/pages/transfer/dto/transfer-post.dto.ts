export interface TransferPostDto {
  fromAccountNumber: string;
  externalIban: string;
  externalBic: string;
  externalRecipientName: string;
  amount: number,
  currency: string,
  description: string
}
