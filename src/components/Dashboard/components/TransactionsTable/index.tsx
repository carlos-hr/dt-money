import { useContext } from "react";
import TransactionsContext from "../../../../global/TransactionsContext";
import { amount, category, date, title } from "./locales";
import { Container } from "./styles";

const TransactionsTable = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>{title}</th>
            <th>{amount}</th>
            <th>{category}</th>
            <th>{date}</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            const { id, title, type, amount, category, createdAt } =
              transaction;

            return (
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(amount)}
                </td>
                <td>{category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(new Date(createdAt))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
