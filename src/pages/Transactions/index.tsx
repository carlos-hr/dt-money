import { Header, SearchForm, Summary } from "../../components";
import { useTransactions } from "../../hooks/useTransactions";
import { dateFormatter, priceFormatter } from "../../utils/formattter";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styled";

const Transactions = () => {
  const transactions = useTransactions();

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
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
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};

export default Transactions;
