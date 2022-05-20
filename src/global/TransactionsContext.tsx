import { createContext } from "react";
import { Transaction, TransactionInput } from "./TransactionProvider";

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export default TransactionsContext;
