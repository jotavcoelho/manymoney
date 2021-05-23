import React, { useContext } from 'react';
import incomingImg from '../../assets/incoming.svg';
import outgoingImg from '../../assets/outgoing.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  return(
    <Container>
      <div>
        <header>
          <p>Incoming</p>
          <img src={incomingImg} alt="Incoming" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outgoing</p>
          <img src={outgoingImg} alt="Outgoing" />
        </header>
        <strong>
          - {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}