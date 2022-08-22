import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "..";
import logo from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, TransactionButton } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <TransactionButton>Nova transação</TransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
