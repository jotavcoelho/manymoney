import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomingImg from '../../assets/incoming.svg';
import outgoingImg from '../../assets/outgoing.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    console.log({
      title,
      amount,
      category,
      transactionType
    })
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close" />
      </button>
      
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Record transaction</h2>
        
        <input 
          placeholder="Title" 
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        
        <input 
          type="number"
          placeholder="Amount" 
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setTransactionType('deposit')}}
            isActive={transactionType === 'deposit'}
            activeColor={'#33cc95'}
            >
            <img src={incomingImg} alt="Incoming" />
            <span>Incoming</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setTransactionType('withdrawal')}}
            isActive={transactionType === 'withdrawal'}
            activeColor={'#e52e4d'}
          >
            <img src={outgoingImg} alt="Outgoing" />
            <span>Outgoing</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Category" 
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        
        <button type="submit">Record</button>
      </Container>
    </Modal>  
  );
}