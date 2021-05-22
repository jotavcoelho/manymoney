import { useState } from 'react';
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
  const [transactionType, setTransactionType] = useState('deposit');

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
      <Container>
        <h2>Record transaction</h2>
        
        <input 
          placeholder="Title" 
        />
        
        <input 
          type="number"
          placeholder="Amount" 
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
          placeholder="Type" 
        />
        
        <button type="submit">Record</button>
      </Container>
    </Modal>  
  );
}