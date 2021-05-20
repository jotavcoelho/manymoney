import { useEffect } from 'react';
import { api } from '../../services/api';

import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data));
  }, []);


  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit" >$12.000</td>
            <td>Dev</td>
            <td>02/20/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdrawal" >-$1.000</td>
            <td>House</td>
            <td>12/20/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}