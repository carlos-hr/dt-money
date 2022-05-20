import { textTransaction } from "./locales";
import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  handleOpenModal: () => void;
}

const Header = (props: HeaderProps) => {
  const { handleOpenModal } = props;

  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button onClick={handleOpenModal}>{textTransaction}</button>
      </Content>
    </Container>
  );
};

export default Header;
