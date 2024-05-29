import Link from "next/link";
import React from "react";
import {Tx} from '@mempool/mempool.js/lib/interfaces/bitcoin/transactions';

interface Props {
  filter: string;
  address: string;
  transactions: Tx[];
}

const TransactionTable = async ({ filter, address, transactions}: Props) => {
  // const res = await fetch(
  //   "https://jsonplaceholder.typicode.com/transactions",
  //   { cache: "no-store" }
  // );
  // const transactions: Tx[] = await res.json();

  // const filteredTransactions = transactions.filter((transaction) =>
  //   transaction.status.confirmed
  //     ? (transaction: Tx) => transaction
  //     : (transaction: Tx) => transaction.name
  // );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link className="btn btn-ghost" href={`/transactions/${address}?filter=sent`}>Sent</Link>
          
            <Link className="btn btn-ghost"href={`/transactions/${address}?sortOrder=all`}>All</Link>
          </th>
        </tr>
        <tr>
          <th>Fee</th>
          <th>Txid</th>
          <th>Confirmed</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          
          <tr key={transaction.txid}>
            <td>{transaction.fee}</td>
            <td>{transaction.txid}</td>
            <td>{transaction.status.confirmed ? "true" : "false"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
