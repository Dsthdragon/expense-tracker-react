export interface IFormState {
  id?: number;
  type: TransactionType;
  amount: number;
  description: string;
}

export type TransactionType = "expense" | "income";