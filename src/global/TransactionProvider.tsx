import { ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import TransactionsContext from "./TransactionsContext";

interface TransactionProviderProps {
  children: ReactNode;
}

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export type TransactionInput = Omit<Transaction, "id" | "createdAt">;

const TransactionProvider = (props: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  const createTransaction = async (data: TransactionInput) => {
    const response = await api.post("/transactions", {
      ...data,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {props.children}
    </TransactionsContext.Provider>
  );
};

export default TransactionProvider;
