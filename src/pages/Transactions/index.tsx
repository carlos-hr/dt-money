import {
  Header,
  SearchForm,
  Summary,
  TransactionsTable,
} from "../../components";

import { TransactionsContainer } from "./styled";

const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable />
      </TransactionsContainer>
    </div>
  );
};

export default Transactions;
