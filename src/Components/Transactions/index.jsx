import React from 'react';
// import Dialog from '../Dialog';

const Transaction = ({ transactions, loading }) => (
  loading ? ''
    : transactions.map((transaction, index) => (
      <tr key={transaction.id}>
        <th scope="row">{index + 1}</th>
        <td className="text-center">{`${new Date(transaction.createdAt).toLocaleDateString()} ${new Date(transaction.createdAt).toLocaleTimeString()}`}</td>
        <td className="text-center">
          {transaction.method}
        </td>
        <td className="text-center">
        &#8358;
          {' '}
          {transaction.amount}
        </td>
      </tr>
    ))
);

export default Transaction;
