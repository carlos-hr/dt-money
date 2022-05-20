import { FormEvent, useState, useContext } from "react";
import {
  altCloseModal,
  buttonIncome,
  buttonOutcome,
  buttonRegister,
  modalTitle,
  placeholderCategory,
  placeholderPrice,
  placeholderTitle,
} from "./locales";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import Modal from "react-modal";
import closeIcon from "../../assets/close.svg";
import incomeIcon from "../../assets/income.svg";
import outcomeIcon from "../../assets/outcome.svg";
import TransactionsContext from "../../global/TransactionsContext";

Modal.setAppElement("#root");

interface TransactionModalProps {
  onRequestClose: () => void;
  isOpen: boolean;
}

const TransactionModal = (props: TransactionModalProps) => {
  const { onRequestClose, isOpen } = props;

  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");

  const submitTransaction = async (e: FormEvent) => {
    e.preventDefault();

    await createTransaction({ title, amount, category, type });
    onRequestClose();
    setTitle("");
    setAmount(0);
    setType("income");
    setCategory("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button onClick={onRequestClose} className="react-close-modal">
        <img src={closeIcon} alt={altCloseModal} />
      </button>

      <Container onSubmit={submitTransaction}>
        <h2>{modalTitle}</h2>

        <input
          placeholder={placeholderTitle}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          placeholder={placeholderPrice}
          type="number"
          onChange={(e) => setAmount(Number(e.target.value))}
          value={amount}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("income")}
            isActive={type === "income"}
            activeColor="#33CC95"
          >
            <img src={incomeIcon} alt={buttonIncome} />
            <span>{buttonIncome}</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("outcome")}
            isActive={type === "outcome"}
            activeColor="#E52E4D"
          >
            <img src={outcomeIcon} alt={buttonOutcome} />
            <span>{buttonOutcome}</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder={placeholderCategory}
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <button type="submit">{buttonRegister}</button>
      </Container>
    </Modal>
  );
};

export default TransactionModal;
