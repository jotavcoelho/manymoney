import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [NewTransactionModal, setNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setNewTransactionModal(true);
  }
  
  function handleCloseNewTransactionModal() {
    setNewTransactionModal(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      
      <Modal 
          isOpen={NewTransactionModal} 
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Register transaction</h2>
      </Modal>  
    </>
  );
}

export default App;
