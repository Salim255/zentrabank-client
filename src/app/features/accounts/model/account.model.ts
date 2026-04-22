import { AccountDto } from "../../application/model/application.model";

export interface AccountsResponseDto {
  status: string;
  data: {
    accounts: AccountDto []
  }
}
export class Account {
  // ─────────────────────────────────────────────
  // Private fields (no direct access from outside)
  // ─────────────────────────────────────────────
  private readonly _id: string;
  private readonly _accountNumber: string;
  private _balance: number;
  private readonly _type: "CHECKING" | "SAVINGS" | "CREDIT" | "LOAN";
  private _status: "ACTIVE" | "INACTIVE" | "CLOSED";
  private readonly _currency: string;
  private readonly _iban: string;
  private readonly _bic: string;
  private readonly _overdraftEnabled: boolean;
  private readonly _overdraftLimit: number;
  private readonly _createdAt: string;
  private _updatedAt: string;

  // ─────────────────────────────────────────────
  // Constructor
  // ─────────────────────────────────────────────
  constructor(dto: {
    id: string;
    accountNumber: string;
    balance: number;
    type: "CHECKING" | "SAVINGS" | "CREDIT" | "LOAN";
    status: "ACTIVE" | "INACTIVE" | "CLOSED";
    currency: string;
    iban: string;
    bic: string;
    overdraftEnabled: boolean;
    overdraftLimit: number;
    createdAt: string;
    updatedAt: string;
  }) {
    this._id = dto.id;
    this._accountNumber = dto.accountNumber;
    this._balance = dto.balance;
    this._type = dto.type;
    this._status = dto.status;
    this._currency = dto.currency;
    this._iban = dto.iban;
    this._bic = dto.bic;
    this._overdraftEnabled = dto.overdraftEnabled;
    this._overdraftLimit = dto.overdraftLimit;
    this._createdAt = dto.createdAt;
    this._updatedAt = dto.updatedAt;
  }

  // ─────────────────────────────────────────────
  // Getters (read‑only access)
  // ─────────────────────────────────────────────
  get id() { return this._id; }
  get accountNumber() { return this._accountNumber; }
  get balance() { return this._balance; }
  get type() { return this._type; }
  get status() { return this._status; }
  get currency() { return this._currency; }
  get iban() { return this._iban; }
  get bic() { return this._bic; }
  get overdraftEnabled() { return this._overdraftEnabled; }
  get overdraftLimit() { return this._overdraftLimit; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }

  // ─────────────────────────────────────────────
  // Controlled setters (only where mutation is allowed)
  // ─────────────────────────────────────────────

  /** Update balance safely */
  set balance(value: number) {
    if (value < 0 && !this._overdraftEnabled) {
      throw new Error("Overdraft not allowed for this account.");
    }
    if (value < -this._overdraftLimit) {
      throw new Error("Balance exceeds overdraft limit.");
    }
    this._balance = value;
  }

  /** Update status (ACTIVE, INACTIVE, CLOSED) */
  set status(value: "ACTIVE" | "INACTIVE" | "CLOSED") {
    this._status = value;
  }

  /** Computed: formatted balance */
  get formattedBalance(): string {
    return `${this._balance.toFixed(2)} ${this._currency}`;
  }

  /** Computed: is account active */
  get isActive(): boolean {
    return this._status === "ACTIVE";
  }

  /** Computed: overdraft available */
  get hasOverdraft(): boolean {
    return this._overdraftEnabled && this._overdraftLimit > 0;
  }
}
