import { Injectable } from "@angular/core";
import { TransferHttpService } from "./transfer-http.service";
import { Observable } from "rxjs";
import { TransferPostResponseDto } from "../dto/transfer-post-response.dto";
import { TransferPostDto } from "../dto/transfer-post.dto";

@Injectable({providedIn: "root"})
export class TransferService {
  constructor(private transferHttpService: TransferHttpService){}

  createTransfer(payload: TransferPostDto ): Observable<TransferPostResponseDto>{
    return this.transferHttpService.createTransferHttp(payload);
  }
}
