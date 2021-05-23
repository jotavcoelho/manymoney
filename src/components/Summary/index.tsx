import React, { useContext } from 'react';
import incomingImg from '../../assets/incoming.svg';
import outgoingImg from '../../assets/outgoing.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from './styles';

export function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log(transactions);

  return(
    <Container>
      <div>
        <header>
          <p>Incoming</p>
          <img src={incomingImg} alt="Incoming" />
        </header>
        <strong>$1000</strong>
      </div>
      <div>
        <header>
          <p>Outgoing</p>
          <img src={outgoingImg} alt="Outgoing" />
        </header>
        <strong>- $500</strong>
      </div>
      <div className="highlight">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>$500</strong>
      </div>
    </Container>
  );
}