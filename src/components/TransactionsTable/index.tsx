import { useTransactions } from "../../hooks/useTransactions";
import { priceFormatter, dateFormatter } from "../../utils/formattter";
import { Table, PriceHighLight } from "./sytled";

const TransactionsTable = () => {
  const transactions = useTransactions();

  return (
    <Table>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td>
              <PriceHighLight variant={transaction.type}>
                {transaction.type === "outcome" && "- "}
                {priceFormatter.format(transaction.price)}
              </PriceHighLight>
            </td>
            <td>{transaction.category}</td>
            <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionsTable;
