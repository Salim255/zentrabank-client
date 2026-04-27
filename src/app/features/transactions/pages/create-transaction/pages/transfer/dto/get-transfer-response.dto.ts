import { TransferDto } from "./transfer.dto";

export interface GetTransferResponseDto {
  status: string;
  data: {
    transfer: TransferDto []
  }
}
