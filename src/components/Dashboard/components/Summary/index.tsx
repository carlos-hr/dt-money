import { useContext } from "react";
import { Container } from "./styles";
import { textIncomes, textOutcomes, textTotal } from "./locales";
import income from "../../../../assets/income.svg";
import outcome from "../../../../assets/outcome.svg";
import total from "../../../../assets/total.svg";
import TransactionsContext from "../../../../global/TransactionsContext";

const Summary = () => {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.incomes += transaction.amount;
        acc.total += transaction.amount;
      } else if (transaction.type === "outcome") {
        acc.outcomes += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      incomes: 0,
      outcomes: 0,
      total: 0,
    }
  );
  return (
    <Container>
      <div>
        <header>
          <p>{textIncomes}</p>
          <img src={income} alt={textIncomes} />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.incomes)}
        </strong>
      </div>

      <div>
        <header>
          <p>{textOutcomes}</p>
          <img src={outcome} alt={textOutcomes} />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.outcomes)}
        </strong>
      </div>

      <div>
        <header>
          <p>{textTotal}</p>
          <img src={total} alt={textTotal} />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.outcomes)}
        </strong>
      </div>
    </Container>
  );
};

export default Summary;
