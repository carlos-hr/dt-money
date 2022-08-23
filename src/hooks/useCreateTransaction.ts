import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../contexts/TransactionsContext";

export const useCreateTransaction = () => {
  return useContextSelector(
    TransactionsContext,
    (context) => context.createTransaction
  );
};
