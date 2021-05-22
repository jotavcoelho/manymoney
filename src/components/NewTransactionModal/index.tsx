import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomingImg from '../../assets/incoming.svg';
import outgoingImg from '../../assets/outgoing.svg';
import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose }: NewTransactionModalProps) {
  
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
          <button
            type="button"
          >
            <img src={incomingImg} alt="Incoming" />
            <span>Incoming</span>
          </button>

          <button
            type="button"
          >
            <img src={outgoingImg} alt="Outgoing" />
            <span>Outgoing</span>
          </button>
        </TransactionTypeContainer>

        <input 
          placeholder="Category" 
        />
        
        <button type="submit">Record</button>
      </Container>
    </Modal>  
  );
}