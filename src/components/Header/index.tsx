import logo from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, TransactionButton } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} />
        <TransactionButton>Nova transação</TransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
