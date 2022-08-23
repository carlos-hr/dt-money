import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../contexts/TransactionsContext";

export const useFetchTransactions = () => {
  return useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions
  );
};
