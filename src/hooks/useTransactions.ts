import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../contexts/TransactionsContext";

export const useTransactions = () => {
  return useContextSelector(
    TransactionsContext,
    (context) => context.transactions
  );
};
