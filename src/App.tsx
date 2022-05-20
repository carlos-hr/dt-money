import TransactionProvider from "./global/TransactionProvider";
import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Dashboard, Header, TransactionModal } from "./components";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <TransactionProvider>
      <Header handleOpenModal={handleOpenModal} />
      <Dashboard />
      <TransactionModal onRequestClose={handleCloseModal} isOpen={isOpen} />
      <GlobalStyle />
    </TransactionProvider>
  );
};

export default App;
