import Link from "next/link";
import React from "react";
import { Tx } from "@mempool/mempool.js/lib/interfaces/bitcoin/transactions";
import FavoriteCheckbox from "./FavoriteCheckbox";
import axios from "axios";

interface Props {
  filter: string;
  address: string;
  transactions: Tx[];
}
const TransactionTable = async ({ address, transactions }: Props) => {
  const response = await fetch("http://localhost:3000/api/users/1", { cache: "no-store" });
  const currentUser = await response.json();
  console.log("currentUser", currentUser);
  console.log("response", response);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link className="btn btn-ghost" href={`/transactions/?address=${address}&filter=sent`}>
              Sent
            </Link>
            <Link className="btn btn-ghost" href={`/transactions/?address=${address}&filter=all`}>
              All
            </Link>
          </th>
        </tr>
        <tr>
          <th>Favorite</th>
          <th>Fee</th>
          <th>Amount</th>
          <th>Tx Id</th>
          <th>Confirmed</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => {
          return (
            <tr key={transaction.txid}>
              <td>
                <FavoriteCheckbox user={currentUser} transactionId={transaction.txid} />
              </td>
              <td>{transaction.fee}</td>
              <td>${transaction.vout[0].value.toFixed(2)}</td>
              <td>{transaction.txid}</td>
              <td>{transaction.status.confirmed ? "true" : "false"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionTable;
